import { useState } from 'react'
import { createContext } from 'react'

export const ListContext = createContext({})

export const ListProvider = (props) => {
  const [task, setTask] = useState([])

  function addTask(newTask) {
    setTask([
      ...task,
      {
        task: newTask,
        id: Date.now(),
      },
    ])
  }

  function removeTask(id) {
    setTask(task.filter((task) => task.id !== id))
  }

  const value = {
    task,
    addTask,
    removeTask,
  }

  return (
    <ListContext.Provider value={value}>
      {props.children}
    </ListContext.Provider>
  )
}
