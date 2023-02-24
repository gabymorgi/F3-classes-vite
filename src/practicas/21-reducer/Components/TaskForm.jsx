import { useContext, useState } from 'react'
import { actions, ListContext } from '../Contexts/ListContext'

function TaskForm() {
  const [task, setTask] = useState('')
  const { dispatch } = useContext(ListContext)

  function handleSubmit() {
    dispatch({ type: actions.add, payload: task })
    setTask('')
  }
  return (
    <div>
      <input type="text" value={task} onChange={(e) => setTask(e.target.value)} />
      <button onClick={handleSubmit}>Add task</button>
    </div>
  )
}

export default TaskForm
