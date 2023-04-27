import { useContext } from 'react'
import { ChartContext } from '../Contexts/ChartContext'

export const WithContext = () => {
  const chartContext = useContext(ChartContext)
  return (
    <div>
      <h3>WithContext</h3>
      <button onClick={chartContext.changeNumber}>Change</button>
      {chartContext.number}
    </div>
  )
}
