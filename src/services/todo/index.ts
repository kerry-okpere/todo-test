import { db } from '@services/firebase'
import {
  collection,
  getDocs,
  doc,
  setDoc,
  getDoc,
  addDoc,
  deleteDoc,
} from 'firebase/firestore/lite'
import { Todo } from 'global'

const getTodos = async () => {
  const result: Todo[] = []
  try {
    const querySnapshot = await getDocs(collection(db, 'todos'))
    querySnapshot.forEach((doc) => {
      result.push({ id: doc.id, ...doc.data() } as Todo)
    })
  } catch (error) {
    console.log(error)
  }
  return result
}

const getTodoById = async (id: string) => {
  let docSnap
  try {
    const todoRef = doc(db, 'todos', id)
    docSnap = await getDoc(todoRef)
  } catch (error) {
    console.log(error)
  }

  return docSnap?.exists() ? ({ id, ...docSnap.data() } as Todo) : null
}

const deleteTodo = async (id: string) => {
  let res = false
  try {
    await deleteDoc(doc(db, 'todos', id))
    res = true
  } catch (error) {
    console.log(error)
  }

  return res
}

const updateTodo = async (id: string, payload: Partial<Todo>) => {
  let res = false
  try {
    const todoRef = doc(db, 'todos', id)
    await setDoc(todoRef, payload, { merge: true })
    res = true
  } catch (error) {
    console.log(error)
  }

  return res
}

const addTodo = async (payload: Partial<Todo>) => {
  let res: Todo | null = null
  try {
    const { id } = await addDoc(collection(db, 'todos'), payload)
    res = { id, ...payload } as Todo
  } catch (error) {
    console.log(error)
  }

  return res
}

const api = {
  getTodos,
  getTodoById,
  addTodo,
  deleteTodo,
  updateTodo,
}

export default api
