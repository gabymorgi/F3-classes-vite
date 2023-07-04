import styles from './Item.module.css';

function Item(props) {
  return (
    <li className={styles.item}>
      {props.children}
    </li>
  );
}

export default Item;
