import React from 'react'
import styles from './List.module.css'

export function List(props) {
  return (
    <div>
      <h2 className={styles.title}>{props.title}</h2>
      <div className={styles.list}>
        {props.children}
      </div>
    </div>
  )
}
