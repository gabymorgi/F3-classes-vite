import styles from './List.module.css'

export const ListItem = (props) => {
  return (
    <li className={styles.listItem}>
      {props.children}
    </li>
  )
}

export const List = (props) => {
  return (
    <ul className={styles.list}>
      {props.children}
    </ul>
  )
}
