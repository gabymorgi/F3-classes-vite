import React from 'react'

export const RepoDetail = (props) => {
  return (
    <div>
      <h1>{props.repo.name}</h1>
      <h3>{props.repo.description}</h3>
    </div>
  )
}
