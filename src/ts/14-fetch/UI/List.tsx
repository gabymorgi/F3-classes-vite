import styles from './List.module.css'

interface ListItemProps {
  children: React.ReactNode;
}

export const ListItem = (props: ListItemProps) => {
  return (
    <li className={styles.listItem}>
      {props.children}
    </li>
  )
}

interface ListProps {
  children: React.ReactNode;
}

export const List = (props: ListProps) => {
  return (
    <ul className={styles.list}>
      {props.children}
    </ul>
  )
}
