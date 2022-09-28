import { TodoItem } from './todo-item'
import type { Todo } from 'global'

interface Props {
  todos: Todo[]
  onDuplicate: (todo: Partial<Todo>) => void
  onDelete: (id: string) => void
  updateTodo: (
    id: string,
    data: { prop: string; value: string | number | boolean }
  ) => void
}

export const TodoList = ({
  todos,
  updateTodo,
  onDelete,
  onDuplicate,
}: Props) => {
  const handleUpdate = (e: React.ChangeEvent<HTMLInputElement>, id: string) => {
    updateTodo &&
      updateTodo(id, { prop: 'isComplete', value: e.target.checked })
  }

  return (
    <ul>
      {todos.map((todo, index) => {
        return (
          <li key={index}>
            <TodoItem
              {...todo}
              onDelete={onDelete}
              onDuplicate={onDuplicate}
              onChecked={(e) => handleUpdate(e, todo.id)}
            />
          </li>
        )
      })}
    </ul>
  )
}
