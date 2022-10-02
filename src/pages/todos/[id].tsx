import { NextPage, GetServerSideProps } from 'next'
import api from '@services/todo'
import { Todo } from 'global'
import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { isValid } from '@lib/validate'
import { Input } from '@components/input'
import { Loader } from '@components/loader'
import { Textarea } from '@components/textarea'
import { CgArrowLongLeft, CgTrashEmpty } from 'react-icons/cg'
import {
  StyledActionWrapper,
  StyledPageWrapper,
  StyledLink,
  StyledDeleteButton,
  StyledSaveButton,
  StyledContainer,
  StyledDate,
} from '@styles/todo/details-page'
import { DatePicker } from '@components/date-picker'
import { useTheme, Theme } from 'styled-components'

type PageProp = {
  todo: Todo
}

const TodoPage: NextPage<PageProp> = ({ todo }) => {
  const theme = useTheme() as Theme
  const router = useRouter()
  const [validate, setValidate] = useState<{ title: string } | null>(null)

  const [saveLoading, setSaveLoading] = useState(false)
  const updateTodo = async (payload: Todo) => {
    setSaveLoading(true)
    const res = await api.updateTodo(newTodo.id, payload)
    if (res) router.push('/')
  }

  const [deleteLoading, setDeleteLoading] = useState(false)
  const deleteTodo = async () => {
    setDeleteLoading(true)
    const res = await api.deleteTodo(newTodo.id)
    if (res) router.push('/')
  }

  const [newTodo, setTodo] = useState(todo)
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()

    if (!isValid(newTodo.title.trim())) {
      setValidate(() => ({ title: 'Invalid character length' }))
      return
    }
    updateTodo(newTodo)
  }

  return (
    <StyledPageWrapper>
      <form onSubmit={handleSubmit}>
        <StyledContainer>
          <Link href="/" passHref>
            <StyledLink>
              <CgArrowLongLeft size={theme.iconSize} />
              Back
            </StyledLink>
          </Link>

          <header>
            <Input
              name="title"
              data-testid="edit-todo-input"
              withCheckbox
              value={newTodo.title}
              defaultChecked={todo.isComplete}
              error={validate?.title}
              onChecked={(e) =>
                setTodo((prev: Todo) => ({
                  ...prev,
                  isComplete: e.target.checked,
                }))
              }
              onChange={(e) =>
                setTodo((prev: Todo) => ({ ...prev, title: e.target.value }))
              }
            />
          </header>

          <StyledDate>
            <p>Due date</p>
            <DatePicker
              selected={newTodo.due ? new Date(newTodo.due) : undefined}
              onDayClick={(day: Date) =>
                setTodo((prev: Todo) => ({ ...prev, due: day.getTime() }))
              }
            />
          </StyledDate>

          <Textarea
            name="note"
            data-testid="textarea"
            placeholder="Write a note..."
            rows={10}
            value={newTodo.note}
            onChange={(e) =>
              setTodo((prev: Todo) => ({ ...prev, note: e.target.value }))
            }
          />
        </StyledContainer>

        <StyledActionWrapper>
          <StyledDeleteButton
            data-testid="delete-button"
            type="button"
            appearance="error"
            onClick={deleteTodo}
            disabled={deleteLoading}
          >
            {deleteLoading ? (
              <Loader size={theme.iconSize} />
            ) : (
              <CgTrashEmpty size={theme.iconSize} />
            )}
            <span>Delete</span>
          </StyledDeleteButton>
          <StyledSaveButton
            data-testid="save-button"
            type="submit"
            disabled={saveLoading || deleteLoading}
          >
            {saveLoading ? <Loader size={theme.iconSize} /> : null}
            Save
          </StyledSaveButton>
        </StyledActionWrapper>
      </form>
    </StyledPageWrapper>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { id } = ctx.query
  const data = await api.getTodoById(id as string)

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      todo: { ...data, id },
    },
  }
}

export default TodoPage
