import user from '@/fakeApi/ghUser.json'
import styles from './Navbar.module.css';

function Navbar() {
  return (
    <header className={styles.header}>
      <div className={styles.headerSection}>
        <img src="/hitbug-logo.png" alt="Hitbug" />
        <span>Hitbug</span>
      </div>
      <div className={`${styles.userInfo} ${styles.headerSection}`}>
        <div className={styles.headerSection}>
          <span>User Info</span>
          <span>Repos</span>
          <span>Log Out</span>
        </div>
        <div className={styles.headerSection}>
          <span>{user.name}</span>
          <img src={user.avatar_url} alt="Avatar" />
        </div>
      </div>
    </header>
  );
}

export default Navbar;
