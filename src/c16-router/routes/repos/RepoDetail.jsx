import React from 'react'
import { useParams } from 'react-router-dom'

export const RepoDetail = (props) => {

  const params = useParams()

  return (
    <div>
      <h1>repo detail: {params.id}</h1>
    </div>
  )
}
