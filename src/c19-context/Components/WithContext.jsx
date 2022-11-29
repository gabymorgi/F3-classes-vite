import React, { useContext } from 'react'
import { ChangoContext } from '../Contexts/ChangoContext'

export const WithContext = () => {
  const changoContext = useContext(ChangoContext)
  return (
    <div>
      <h3>WithContext</h3>
      <button onClick={changoContext.add}>Add</button>
      <button onClick={changoContext.remove}>Remove</button>
      {/**I use index as key because its just an example :) */}
      {changoContext.chango.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
    </div>
  )
}
