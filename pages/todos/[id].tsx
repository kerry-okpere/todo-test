import { NextPage, GetServerSideProps } from 'next'
import api from '@services/todo'
import { Todo } from 'global'

type PageProp = {
  todo: Partial<Todo>
}

const TodoPage: NextPage<PageProp> = ({ todo }) => {
  return <section>Todo: {todo.title}</section>
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { id } = ctx.query
  const data = await api.getTodoById(id as string)

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      todo: data,
    },
  }
}

export default TodoPage
