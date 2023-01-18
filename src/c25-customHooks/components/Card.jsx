import React from 'react'

export const Card = ({ loading, data }) => {
  return (
    <div>
      <h1>App {loading ? 'loading' : data?.nombre.valor}</h1>
    </div>
  )
}
