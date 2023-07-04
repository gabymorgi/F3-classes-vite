import { useContext } from 'react'
import { ListContext } from '../Contexts/ListContext'

function TaskList() {
  const { task, removeTask } = useContext(ListContext)
  return (
    <div>
      <div className='flex-col'>
        {task.map((task) => (
          <div key={task.id} className='flex'>
            <p>{task.task}</p>
            <button onClick={() => removeTask(task.id)}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TaskList
