import { useState } from 'react'

interface ChartItemProps {
  name: string
  onDelete: () => void
}

const ChartItem = (props: ChartItemProps) => {
  const [isTrue, setIsTrue] = useState<boolean>(false)
  return (
    <div className='flex justify-between'>
      <span>{props.name}</span>
      {/**estado solo para mostrar que pasa cuando ponemos mal las keys */}
      <button onClick={() => setIsTrue(!isTrue)}>
        {isTrue ? 'Yes' : 'No'}
      </button>
      <button onClick={props.onDelete}>Delete</button>
    </div>
  )
}

export default ChartItem
