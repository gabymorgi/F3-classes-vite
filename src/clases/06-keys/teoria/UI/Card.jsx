import styles from './Card.module.css'

const Card = (props) => {
  const { title, children } = props;

  function handleClick() {
    props.onBuy(props.id);
  }

  return (
    <div className={styles.card}>
      <h1>{title}</h1>
      <div className={styles['card-body']}>{children}</div>
      <button onClick={handleClick}>Comprar</button>
    </div>
  );
};

export default Card;
