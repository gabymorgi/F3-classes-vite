import React from 'react'
import { Item } from './Item'

/**
 * @param repos lista de repositorios 
 * @param handleSelectItem callback ejecutada on item click
 * @returns 
 */
export function Lista(props) {
  return (
    <ul>
      {props.repos.map((repo) => {
        return <Item key={repo.id} handleSelectItem={props.handleSelectItem} item={repo} />
      })}
    </ul>
  )
}