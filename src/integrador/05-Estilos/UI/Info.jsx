import styles from './Info.module.css';

function Info(props) {
  return (
    <div className={styles.info}>
      <div className={styles.label}>{props.label}</div>
      <div className={styles.value}>{props.value}</div>
    </div>
  );
}

export default Info;
