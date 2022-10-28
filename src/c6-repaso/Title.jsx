import React from 'react'
import styles from './Title.module.css'

export function Title({ ...props }) {
  return (
    <h2 className={`${styles.title} bs-color`}>
      <div>{props.children}</div>
    </h2>
  )
}
