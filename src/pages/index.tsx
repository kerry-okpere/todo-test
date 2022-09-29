import type { NextPage } from 'next'
import { TodoList } from '@components/todo-list'
import { Greeting } from '@components/greeting'
import { Input } from '@components/input'
import { useEffect, useState } from 'react'
import type { Todo } from 'global'
import api from '@services/todo'
import { Loader } from '@components/loader'
import { isValid } from '@lib/validate'
import { StyledLoaderWrapper, StyledPageWrapper } from '@styles/todo-list-page'

const Home: NextPage = () => {
  const [newTodo, setNewTodo] = useState('')
  const [todos, setTodos] = useState<Todo[]>([])
  const [loading, setLoading] = useState(false)
  const [validate, setValidate] = useState<{ title: string } | null>(null)

  useEffect(() => {
    ;(async () => {
      setLoading(true)
      const res = await api.getTodos()
      setTodos(res)
      setLoading(false)
    })()
  }, [])

  const addTodo = async (title: string) => {
    const newTodo = { title, isComplete: false }
    const res = await api.addTodo(newTodo)

    if (res) {
      setTodos((prevTodos: Todo[]) => [res, ...prevTodos])
      setNewTodo('')
    }
  }

  const deleteTodo = async (id: string) => {
    const res = await api.deleteTodo(id)

    if (res) {
      setTodos((prevTodos: Todo[]) =>
        prevTodos.filter((todo) => todo.id !== id)
      )
    }

    return res
  }

  const updateTodo = async (
    id: string,
    { prop, value }: { prop: string; value: string | number | boolean }
  ) => {
    const payload = { [prop]: value }
    const res = await api.updateTodo(id, payload)

    if (res) {
      setTodos((prevTodos: Todo[]) =>
        prevTodos.map((item) => {
          if (item.id === id) return { ...item, [prop]: value }

          return item
        })
      )
    }
  }

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()

    if (!isValid(newTodo)) {
      setValidate(() => ({ title: 'Invalid character length' }))
      return
    }

    addTodo(newTodo)
  }

  return (
    <StyledPageWrapper>
      <header>
        <Greeting />
      </header>
      <form onSubmit={handleSubmit}>
        <Input
          placeholder="Add a new todo"
          value={newTodo}
          name="title"
          error={validate?.title}
          onChange={(e) => setNewTodo(e.target.value)}
        />
      </form>
      {loading ? (
        <StyledLoaderWrapper>
          <Loader size={40} />
        </StyledLoaderWrapper>
      ) : (
        <TodoList todos={todos} updateTodo={updateTodo} onDelete={deleteTodo} />
      )}
    </StyledPageWrapper>
  )
}

export default Home
