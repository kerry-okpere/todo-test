import { NextPage, GetServerSideProps } from 'next'
import api from '@services/todo'
import { Todo } from 'global'
import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { isValid } from '../validate'
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
} from './styles'
import { DatePicker } from '@components/date-picker'

type PageProp = {
  todo: Todo
}

const TodoPage: NextPage<PageProp> = ({ todo }) => {
  const router = useRouter()
  const [validate, setValidate] = useState<{ title: string } | null>(null)
  const [selected, setSelected] = useState<Date>(new Date())

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

    if (!isValid(newTodo.title)) {
      setValidate(() => ({ title: 'Invalid character length' }))
      return
    }
    updateTodo(newTodo)
  }

  return (
    <StyledPageWrapper>
      <form onSubmit={handleSubmit}>
        <Link href="/" passHref>
          <StyledLink>
            <CgArrowLongLeft size={20} />
            Back
          </StyledLink>
        </Link>

        <header>
          <Input
            name="title"
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
        <DatePicker
          selected={new Date(newTodo.due)}
          onDayClick={(day) =>
            setTodo((prev: Todo) => ({ ...prev, due: day.getTime() }))
          }
        />
        <Textarea
          name="note"
          placeholder="Write a note..."
          rows={6}
          value={newTodo.note}
          onChange={(e) =>
            setTodo((prev: Todo) => ({ ...prev, note: e.target.value }))
          }
        />
        <StyledActionWrapper>
          <StyledDeleteButton
            type="button"
            appearance="error"
            onClick={deleteTodo}
            disabled={deleteLoading}
          >
            {deleteLoading ? <Loader size={17} /> : <CgTrashEmpty size={17} />}
            <span>Delete</span>
          </StyledDeleteButton>
          <StyledSaveButton
            type="submit"
            disabled={saveLoading || deleteLoading}
          >
            {saveLoading ? <Loader size={17} /> : null}
            Save
          </StyledSaveButton>
        </StyledActionWrapper>
      </form>
    </StyledPageWrapper>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { id } = ctx.query
  const res = await api.getTodoById(id as string)
  const data = { ...res, id }

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      todo: data,
    },
  }
}

export default TodoPage
