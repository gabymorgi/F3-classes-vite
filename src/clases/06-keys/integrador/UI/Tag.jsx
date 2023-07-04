import styles from './Tag.module.css';

function Tag(props) {
  return (
    <div className={styles.tag}>
      {props.children}
    </div>
  );
}

export default Tag;
