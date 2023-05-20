import styles from './Card.module.css'

const Card = (props) => {
  const { title, children } = props;

  console.log(props)
  function handleClick() {
    console.log(props.id)
    console.log(props.asdf(1234))
  }

  return (
    <div className={styles.card}>
      <h1>{title}</h1>
      <div className={styles['card-body']}>
        <h3>{props.id}</h3>
        {children}
      </div>
      <button onClick={handleClick}>Comprame!</button>
    </div>
  );
};

export default Card;
