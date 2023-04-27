import ChartItem from './ChartItem'

const Chart = (props) => {
  return (
    <div className='flex-col'>
      {props.chart.length === 0 && <p>Chart is empty</p>}
      {props.chart.map((item) => {
        return (
          <ChartItem
            key={item.chartId}
            name={item.game.name}
            onDelete={() => props.onDelete(item.chartId)}
          />
        )
      })}
    </div>
  )
}

export default Chart
