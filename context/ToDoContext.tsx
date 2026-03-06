import { createContext, ReactNode, useEffect, useState } from "react";
import { ID } from "react-native-appwrite";
import { client, databases } from "../lib/appwrite";

interface ToDo {
  $id: string
  $sequence: number
  $collectionId: string
  $databaseId: string
  $createdAt: string
  $updatedAt: string
  $permissions: string[]
  todo: string
  check: boolean
}

interface ToDoContextType {
  todos: ToDo[]
  checkToDo: (id: string, check: boolean) => Promise<ToDo | undefined>
  fetchToDos: () => Promise<void>
  fetchToDoById: (id: string) => Promise<ToDo | undefined>
  createToDo: (data: { todo: string, check: boolean}) => Promise<ToDo | undefined>
  deleteToDo: (id: string) => Promise<void>
  updateToDo: (id: string, data: { todo: string }) => Promise<ToDo | undefined>
}

const DATABASE_ID = "69a56d560030bd8a4bfa"
const COLLECTION_ID = "todos"

export const ToDoContext = createContext<ToDoContextType | undefined>(undefined)

export const ToDoProvider = ({children}: {children: ReactNode}) => {
  const [todos, setTodos] = useState<ToDo[]>([])

  const checkToDo = async ( id: string, check: boolean) => {
    try {
      const updated = await databases.updateDocument<ToDo>(
        DATABASE_ID,
        COLLECTION_ID,
        id,
        {check}
      )
      setTodos(prev => prev.map(todo => todo.$id === id ? updated : todo))

      return updated
    } catch (error) {
      console.log((error as Error).message)
    }
  }
  const fetchToDos = async () => {
    try {
      const response = await databases.listDocuments<ToDo>(
        DATABASE_ID,
        COLLECTION_ID,
      )

      setTodos(response.documents)
      console.log(response.documents)
    } catch (error) {
      console.log((error as Error).message)
    }
  }

  const fetchToDoById = async (id: string) => {
    try {
      const response = await databases.getDocument<ToDo>(
        DATABASE_ID,
        COLLECTION_ID,
        id
      )

      return response
    } catch (error) {
      console.log((error as Error).message)
    }
  }

  const createToDo = async ( data: {todo: string, check: boolean}) => {
    try {
      console.log('createToDo start', data)
      const newToDo = await databases.createDocument<ToDo>(
        DATABASE_ID, 
        COLLECTION_ID, 
        ID.unique(), 
        {...data, check: data.check ?? false}
      )
      console.log('createToDo success', newToDo)
      return newToDo
    } catch (error) {
      console.log((error as Error).message)
    }
  }

  const deleteToDo = async (id: string) => {
    try {
      await databases.deleteDocument(
        DATABASE_ID,
        COLLECTION_ID,
        id
      )
    } catch (error) {
      console.log((error as Error).message)
    }
  }

  const updateToDo = async (id: string, data: {todo: string}) => {
    try {
      const updatedToDo = await databases.updateDocument<ToDo>(
        DATABASE_ID,
        COLLECTION_ID,
        id,
        data
      )
      return updatedToDo
    } catch (error) {
      console.log((error as Error).message)
    }
  }

  useEffect(() => {

    const channel = `databases.${DATABASE_ID}.collections.${COLLECTION_ID}.documents`

    fetchToDos()
    
    const unsubscribe = client.subscribe([channel], (response: {payload: ToDo; events: string[]}) => {
      const { payload, events }= response

      if (events?.[0]?.includes("create")) {
        setTodos((prevTodos) => [...prevTodos, payload])
      }
      
      if (events?.[0]?.includes("delete")) {
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.$id !== payload.$id))
      }

      if (events?.[0]?.includes("update")) {
        setTodos((prevTodos) => prevTodos.map((todo) => todo.$id === payload.$id ? payload : todo))
      }
    })

    return () => {
      unsubscribe?.()
    }

  }, [])

  return (
    <ToDoContext.Provider
     value={{todos, checkToDo, fetchToDos, fetchToDoById, createToDo, deleteToDo, updateToDo}}
    >
      {children}
    </ToDoContext.Provider>
  )
}