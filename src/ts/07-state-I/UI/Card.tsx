import styles from './Card.module.css'

interface CardProps {
  title: string;
  children: React.ReactNode;
}

const Card = (props: CardProps) => {
  const { title, children } = props;
  return (
    <div className={styles.card}>
      <h1>{title}</h1>
      <div className={styles['card-body']}>{children}</div>
    </div>
  );
};

export default Card;
