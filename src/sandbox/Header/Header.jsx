import styles from './Header.module.css'

const Header = () => {
  return (
    <header>
      <h1 className={styles.h1}>My App</h1>
      <img src="/sburb.svg" width="50px" height="50px" alt='Sburb' />
    </header>
  )
}

export default Header
