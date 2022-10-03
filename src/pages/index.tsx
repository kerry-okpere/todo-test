import type { NextPage } from 'next'
import { TodoList } from '@components/todo-list'
import { Greeting } from '@components/greeting'
import { Input } from '@components/input'
import { useEffect, useState } from 'react'
import type { Todo } from 'global'
import api from '@services/todo'
import { Loader } from '@components/loader'
import { isValid } from '@lib/validate'
import {
  StyledLoaderWrapper,
  StyledPageWrapper,
  StyledPageTabWrapper,
} from '@styles/todo/list-page'
import { Tab } from '@components/tab'

const Home: NextPage = () => {
  const [newTodo, setNewTodo] = useState('')
  const [todos, setTodos] = useState<Todo[]>([])
  const [loading, setLoading] = useState(false)
  const [addLoading, setAddLoading] = useState(false)
  const [validate, setValidate] = useState<{ title: string } | null>(null)
  const [filter, setFilter] = useState('all')

  useEffect(() => {
    ;(async () => {
      setLoading(true)
      const res = await api.getTodos()
      setTodos(res)
      setLoading(false)
    })()
  }, [])

  const computedTodos = () => {
    if (filter === 'complete') return todos.filter((item) => item.isComplete)
    if (filter === 'active') return todos.filter((item) => !item.isComplete)
    return todos
  }

  const addTodo = async (title: string) => {
    setAddLoading(true)
    const newTodo = { title, isComplete: false, note: '', due: 0 }
    const res = await api.addTodo(newTodo)

    if (res) {
      setTodos((prevTodos: Todo[]) => [...prevTodos, res])
      setNewTodo('')
    }
    setAddLoading(false)
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

    if (!isValid(newTodo.trim())) {
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
          data-testid="new-todo-input"
          isLoading={addLoading}
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
        <TodoList
          todos={computedTodos()}
          updateTodo={updateTodo}
          onDelete={deleteTodo}
        />
      )}
      <StyledPageTabWrapper>
        <Tab
          active={filter}
          tabs={['all', 'active', 'complete']}
          onChange={(tab) => setFilter(tab)}
        />
      </StyledPageTabWrapper>
    </StyledPageWrapper>
  )
}

export default Home
