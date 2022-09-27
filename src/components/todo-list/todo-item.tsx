import { Checkbox } from '@components/checkbox'
import type { Todo } from 'global'
import { useRouter } from 'next/router'

interface Props extends Todo {
  onChecked: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const TodoItem = ({ id, title, isComplete, onChecked }: Props) => {
  const router = useRouter()

  const handleClick = () => {
    // TODO: handle double click for inline editing

    router.push(`todos/${id}`)
  }

  return (
    <div onClick={handleClick}>
      <Checkbox checked={isComplete} onChange={onChecked} />
      <p>{title}</p>
    </div>
  )
}
