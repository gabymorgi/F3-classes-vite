import styles from './FlexSection.module.css';

function FlexSection({ children }) {
  return <div className={styles.flexSection}>{children}</div>;
}

export default FlexSection;
