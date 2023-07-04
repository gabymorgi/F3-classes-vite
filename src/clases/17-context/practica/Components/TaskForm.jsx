import { useContext, useState } from 'react'
import { ListContext } from '../Contexts/ListContext'

function TaskForm() {
  const [task, setTask] = useState('')
  const { addTask } = useContext(ListContext)

  function handleSubmit() {
    addTask(task)
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
