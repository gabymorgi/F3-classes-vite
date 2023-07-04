import { useReducer } from 'react'
import { createContext } from 'react'

export const ListContext = createContext({})

export const actions = {
  add: 'add',
  remove: 'remove',
  complete: 'complete',
  completeAll: 'allComplete',
  removeAll: 'removeAll',
}

function reducer(state, action) {
  switch (action.type) {
    case actions.add:
      return [
        ...state,
        {
          task: action.payload,
          completed: false,
          id: Date.now(),
        },
      ]
    case actions.remove:
      return state.filter((task) => task.id !== action.payload)
    case actions.complete:
      return state.map((task) =>
        task.id === action.payload ? { ...task, completed: true } : task
      )
    case actions.completeAll:
      return state.map((task) => ({ ...task, completed: true }))
    case actions.removeAll:
      return []
    default:
      throw new Error("Action doesn't exist")
  }
}

export const ListProvider = (props) => {
  const [task, dispatch] = useReducer(reducer, [])

  const value = {
    task,
    dispatch,
  }

  return (
    <ListContext.Provider value={value}>
      {props.children}
    </ListContext.Provider>
  )
}
