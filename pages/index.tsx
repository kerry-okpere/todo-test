import type { NextPage } from 'next'
import { TodoList } from '@components/todo-list'
import { Greeting } from '@components/greeting'
import { Input } from '@components/input'
import { useState } from 'react'
import type { Todo } from 'global'

const Home: NextPage = () => {
  const [newTask, setNewTask] = useState('')
  const [todos, setTodos] = useState<Todo[]>([])

  const addTodo = () => {
    setTodos((prevTodos: Todo[]) => [
      {
        id: `${prevTodos.length}`,
        title: newTask,
        isComplete: false,
      },
      ...prevTodos,
    ])
    setNewTask('')
  }

  const updateTodo = (
    id: string,
    { prop, value }: { prop: string; value: string | number | boolean }
  ) => {
    setTodos((prevTodos: Todo[]) =>
      prevTodos.map((item) => {
        if (item.id === id) return { ...item, [prop]: value }

        return item
      })
    )
  }

  return (
    <section>
      <Greeting />
      <Input
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        onEnter={addTodo}
      />
      <TodoList todos={todos} updateTodo={updateTodo} />
    </section>
  )
}

export default Home
