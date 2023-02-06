import { useContext } from 'react'
import { ChartContext } from '../Contexts/ChartContext'

export const NoContext = () => {
  const chartContext = useContext(ChartContext)
  console.log('no context:', chartContext)
  return (
    <div>
      <h3>No Context</h3>
      <button onClick={chartContext.changeNumber}>Change</button>
      {chartContext.number}
    </div>
  )
}
