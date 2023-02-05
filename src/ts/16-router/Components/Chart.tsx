import ChartItem from './ChartItem'

interface ChartProps {
  chart: {
    chartId: number
    game: {
      name: string
    }
  }[]
  onDelete: (chartId: number) => void
}

const Chart = (props: ChartProps) => {
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
