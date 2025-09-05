import React from 'react'
import styles from "./Navbar.module.css"
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.change}>
        <ul className={styles.navList}>
          <li  className={styles.navItem} ><Link to="/" className={styles.Link}>Home</Link></li>
          <li  className={styles.navItem}><Link  to="/about" className={styles.Link}>About</Link></li>
          <li  className={styles.navItem}><Link  to="/search" className={styles.Link}>Search</Link></li>
          <li  className={styles.navItem}><Link  to="/Login" className={styles.Link}>Login</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar