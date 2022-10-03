export type Todo = {
  id: string
  title: string
  due: number
  note: string
  isComplete: boolean
}

export enum Collections {
  Todo = 'todo',
}
