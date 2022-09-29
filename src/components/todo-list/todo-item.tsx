import type { Todo } from 'global'
import { useRouter } from 'next/router'
import { Tag } from '@components/tag'
import { Checkbox } from '@components/checkbox'
import { StyledTodoItem, StyledRow, StyledTodoItemTitle } from './styles'
import { useState } from 'react'
import { MoreMenuItem, MoreMenu } from '@components/more-menu'
import { CgTrashEmpty } from 'react-icons/cg'
import { HiPencil } from 'react-icons/hi'
import { Loader } from '@components/loader'
import { useTodayDate } from '@hooks/useDate'
import { useTheme, Theme } from 'styled-components'
interface Props extends Todo {
  onChecked: (e: React.ChangeEvent<HTMLInputElement>) => void
  onDelete: (id: string) => void
}

export const TodoItem = ({
  id,
  title,
  due,
  isComplete,
  onChecked,
  onDelete,
}: Props) => {
  const theme = useTheme() as Theme
  const router = useRouter()
  const { month, day } = useTodayDate(new Date(due))

  // handles unControlled side effect
  const [complete, setComplete] = useState(isComplete)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setComplete(e.target.checked)
    onChecked(e)
  }

  const [delLoading, setDelLoading] = useState(false)
  const handleDelete = async () => {
    setDelLoading(true)
    await onDelete(id)
    setDelLoading(false)
  }

  const [editLoading, setLoading] = useState(false)
  const handleEdit = async () => {
    setLoading(true)
    router.push(`todos/${id}`)
  }

  return (
    <StyledTodoItem isComplete={complete}>
      <StyledRow>
        <Checkbox defaultChecked={isComplete} onChange={handleChange} />
        <StyledTodoItemTitle>{title}</StyledTodoItemTitle>
      </StyledRow>

      <StyledRow>
        {due ? <Tag text={`${day} ${month}`} /> : null}
        <MoreMenu>
          <MoreMenuItem onClick={() => handleEdit()}>
            {editLoading ? (
              <Loader size={theme.iconSize} />
            ) : (
              <HiPencil size={theme.iconSize} />
            )}
            <span>Edit</span>
          </MoreMenuItem>
          <MoreMenuItem onClick={() => handleDelete()}>
            {delLoading ? (
              <Loader size={theme.iconSize} />
            ) : (
              <CgTrashEmpty size={theme.iconSize} />
            )}
            <span>Delete</span>
          </MoreMenuItem>
        </MoreMenu>
      </StyledRow>
    </StyledTodoItem>
  )
}
