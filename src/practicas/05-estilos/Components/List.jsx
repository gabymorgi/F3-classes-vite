import styles from './List.module.css';

function List(props) {
  return (
    <ul className={styles.list}>
      {props.children}
    </ul>
  );
}

export default List;
