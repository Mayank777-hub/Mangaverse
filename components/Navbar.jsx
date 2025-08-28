import React from 'react'
import styles from "./Navbar.module.css"

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.change}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>Home</li>
          <li className={styles.navItem}>About</li>
          <li className={styles.navItem}>Search</li>
          <li className={styles.navItem}>Contact Us</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar