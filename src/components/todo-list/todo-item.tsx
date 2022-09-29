import type { Todo } from 'global'
import { useRouter } from 'next/router'
import { Tag } from '@components/tag'
import { Checkbox } from '@components/checkbox'
import { StyledTodoItem, StyledTitle } from './styles'
import { useState } from 'react'
import { MoreMenu, MoreMenuItem } from '@components/more-menu'
import { CgTrashEmpty } from 'react-icons/cg'
import { HiPencil } from 'react-icons/hi'
import { Loader } from '@components/loader'
interface Props extends Todo {
  onChecked: (e: React.ChangeEvent<HTMLInputElement>) => void
  onDelete: (id: string) => void
}

export const TodoItem = ({
  id,
  title,
  isComplete,
  onChecked,
  onDelete,
}: Props) => {
  // Todo: fix overflow issue with long text
  const router = useRouter()

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
      <Checkbox defaultChecked={isComplete} onChange={handleChange} />
      <StyledTitle>
        <p>{title}</p>
      </StyledTitle>
      <Tag text={'18 Dec '} />
      <MoreMenu>
        <MoreMenuItem onClick={() => handleEdit()}>
          {editLoading ? <Loader size={17} /> : <HiPencil size={17} />}
          <span>Edit</span>
        </MoreMenuItem>
        <MoreMenuItem onClick={() => handleDelete()}>
          {delLoading ? <Loader size={17} /> : <CgTrashEmpty size={17} />}
          <span>Delete</span>
        </MoreMenuItem>
      </MoreMenu>
    </StyledTodoItem>
  )
}
