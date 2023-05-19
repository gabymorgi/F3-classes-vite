import styles from './CssCard.module.css'

const Card = (props) => {
  console.log(styles)
  // debugger
  const { title, children } = props;
  return (
    <div className={styles.card}>
      <h1 className={styles.h1}>{title}</h1>
      <div>{children}</div>
    </div>
  );
};

export default Card;
