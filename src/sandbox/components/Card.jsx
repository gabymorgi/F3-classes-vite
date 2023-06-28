import styles from './Card.module.css';

console.log(styles)

function Card() {
  return (
    <div className={`${styles.card} otraClase`}>
      asdfasdfsadfas la card
    </div>
  );
}

export default Card;
