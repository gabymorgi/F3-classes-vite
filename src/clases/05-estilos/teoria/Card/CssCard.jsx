import styles from './CssCard.module.css'

const Card = (props) => {
  const { title, children } = props;
  return (
    <div className={styles.card}>
      <h1>{title}</h1>
      {/* recuerden que ademas del operador . podemos usar [] para acceder a propiedades */}
      <div className={styles['card-body']}>{children}</div>
    </div>
  );
};

export default Card;
