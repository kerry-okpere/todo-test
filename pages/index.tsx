import type { NextPage } from 'next'
import { TodoList } from '@components/todo-list'
import { Greeting } from '@components/greeting'
import { Input } from '@components/input'
import { useEffect, useState } from 'react'
import type { Todo } from 'global'
import api from '@services/todo'

// Show loading state
// show empty state

const Home: NextPage = () => {
  const [newTask, setNewTask] = useState('')
  const [todos, setTodos] = useState<Todo[]>([])
  const [loading, setLoading] = useState(false)

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
      setNewTask('')
    }
  }

  const deleteTodo = async (id: string) => {
    const res = await api.deleteTodo(id)

    if (res) {
      setTodos((prevTodos: Todo[]) =>
        prevTodos.filter((todo) => todo.id !== id)
      )
    }
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

  const isValid = (value: string) => value.length > 2

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()
    const target = e.target as typeof e.target & {
      todo: { value: string }
    }

    if (!isValid(target.todo.value)) {
      // TODO: add ui feedback
      console.log('Todo should be more than 2 characters')
      return
    }

    addTodo(target.todo.value)
  }

  return (
    <section>
      <Greeting />
      <form onSubmit={handleSubmit}>
        <Input
          value={newTask}
          name="todo"
          onChange={(e) => setNewTask(e.target.value)}
        />
      </form>
      {loading ? (
        'loading...'
      ) : (
        <TodoList
          todos={todos}
          updateTodo={updateTodo}
          onDelete={deleteTodo}
          onDuplicate={() => {
            'hey'
          }}
        />
      )}
    </section>
  )
}

export default Home
