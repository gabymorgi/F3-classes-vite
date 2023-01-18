interface ChartItemProps {
  name: string
  onDelete: () => void
}

const ChartItem = (props: ChartItemProps) => {
  return (
    <div className='flex justify-between'>
      <span>{props.name}</span>
      <button onClick={props.onDelete}>Delete</button>
    </div>
  )
}

export default ChartItem
