import type { Todo } from 'global'
import { TodoItem } from './todo-item'
import { StyledTodoList } from './styles'
interface Props {
  todos: Todo[]
  onDelete: (id: string) => void
  updateTodo: (
    id: string,
    data: { prop: string; value: string | number | boolean }
  ) => void
}

export const TodoList = ({ todos, updateTodo, onDelete }: Props) => {
  const handleUpdate = (e: React.ChangeEvent<HTMLInputElement>, id: string) => {
    updateTodo &&
      updateTodo(id, { prop: 'isComplete', value: e.target.checked })
  }

  return (
    <StyledTodoList data-testid="todo-list">
      {todos.map((todo, index) => {
        return (
          <li key={index}>
            <TodoItem
              {...todo}
              onDelete={onDelete}
              onChecked={(e) => handleUpdate(e, todo.id)}
            />
          </li>
        )
      })}
    </StyledTodoList>
  )
}
