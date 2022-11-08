import React from 'react'

/**
 * @param item objeto con una key name 
 * @param handleSelectItem callback ejecutada on click
 * @returns an li
 */
export function Item(props) {
  function handleClick() {
    props.handleSelectItem(props.item)
  }
  return <li onClick={handleClick}>{props.item.name}</li>
}
