import styles from './Card.module.css'

const Card = (props) => {
  const { title, children } = props;
  return (
    <div className={styles.card}>
      <h1>{title}</h1>
      <div className={styles['card-body']}>{children}</div>
    </div>
  );
};

export default Card;
