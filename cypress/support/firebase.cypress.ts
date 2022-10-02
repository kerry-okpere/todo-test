import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore/lite'
import { collection, getDocs, doc, deleteDoc } from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: Cypress.env('FIREBASE_API_KEY'),
  authDomain: Cypress.env('FIREBASE_AUTH_DOMAIN'),
  projectId: Cypress.env('FIREBASE_PROJECT_ID'),
  storageBucket: Cypress.env('FIREBASE_STORAGE_BUCKET'),
  messagingSenderId: Cypress.env('FIREBASE_MESSAGING_SENDER_ID'),
  appId: Cypress.env('FIREBASE_APP_ID'),
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)

export const deleteAll = async () => {
  let res = false
  try {
    const todos = await getDocs(collection(db, 'todos'))
    const requests = todos.docs.map((item) =>
      deleteDoc(doc(db, 'todos', item.id))
    )
    await Promise.all(requests)
    res = true
  } catch (error) {
    console.log(error)
  }

  return res
}
