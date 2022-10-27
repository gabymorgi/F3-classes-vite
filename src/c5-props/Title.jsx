import React from 'react'
import styles from './Title.module.css'
//styles es un objeto con todas las clases de css como keys
//y los nombres hasheados como values

export function Title({ ...props }) {
  return (
    <h2 className={`${styles.title} bs-color`}>
      {/** puedo combinar nombres de clases asi */}
      <div>{props.children}</div>
    </h2>
  )
}
