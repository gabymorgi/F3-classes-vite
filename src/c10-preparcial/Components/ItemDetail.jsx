import React, { useState } from 'react'

/**
 * @param repo un objeto opcional con los datos de un repositorio 
 * @returns 
 */
export function ItemDetail(props) {
  const [bool, setBool] = useState(false)

  if (!props.repo) {
    return <div>Selecciona un repositorio</div>
  }
  
  console.log(props)
  return (
    <div>
      <h1>{props.repo.name}</h1>
      <p>{props.repo.description}</p>
      {props.repo.fork ? <span>Repo forked</span> : undefined}
      <p>{props.repo.language}</p>
      <a target="_blank" rel="noreferrer" href={props.repo.html_url}>Go to Github</a>
      <p>{props.repo.created_at}</p>
      <button onClick={() => setBool(!bool)}>{bool ? "si" : "no"}</button>
    </div>
  )
}
