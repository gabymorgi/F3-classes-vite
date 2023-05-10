import styles from './Card.module.css';

function Card(props) {
  return (
    <div className={styles.card}>
      {props.title ? <div className={styles.title}>{props.title}</div> : undefined}
      <div className={styles.body}>{props.children}</div>
      {props.footer ? <div className={styles.footer}>{props.footer}</div> : undefined}
    </div>
  );
}

export default Card;
