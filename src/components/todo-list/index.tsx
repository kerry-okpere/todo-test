import { TodoItem } from './todo-item'
import type { Todo } from 'global'

interface Props {
  todos: Todo[]
  updateTodo?: (
    id: string,
    data: { prop: string; value: string | number | boolean }
  ) => void
}

export const TodoList = ({ todos, updateTodo }: Props) => {
  const handleUpdate = (e: React.ChangeEvent<HTMLInputElement>, id: string) => {
    updateTodo &&
      updateTodo(id, { prop: 'isComplete', value: e.target.checked })
  }

  return (
    <ul>
      {todos.map((todo, index) => {
        return (
          <li key={index}>
            <TodoItem {...todo} onChecked={(e) => handleUpdate(e, todo.id)} />
          </li>
        )
      })}
    </ul>
  )
}
