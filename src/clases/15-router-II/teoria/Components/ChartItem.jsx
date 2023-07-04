const ChartItem = (props) => {
  return (
    <div className='flex justify-between'>
      <span>{props.name}</span>
      <button onClick={props.onDelete}>Delete</button>
    </div>
  )
}

export default ChartItem
