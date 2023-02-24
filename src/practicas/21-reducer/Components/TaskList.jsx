import { useContext } from 'react'
import { actions, ListContext } from '../Contexts/ListContext'

function TaskList() {
  const { task, dispatch } = useContext(ListContext)
  return (
    <div className='flex-col'>
      {task.map((task) => (
        <div key={task.id} className='flex'>
          <input
            type='checkbox'
            checked={task.completed}
            onChange={() =>
              dispatch({ type: actions.complete, payload: task.id })
            }
          />
          <p>{task.task}</p>
          <button
            onClick={() =>
              dispatch({ type: actions.remove, payload: task.id })
            }
          >
            Remove
          </button>
        </div>
      ))}
      <button onClick={() => dispatch({ type: actions.completeAll })}>
        Complete all
      </button>
      <button onClick={() => dispatch({ type: actions.removeAll })}>
        Remove all
      </button>
    </div>
  )
}

export default TaskList
