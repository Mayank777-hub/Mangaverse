import React from 'react'
import styles from "./Navbar.module.css"
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell,faCartShopping ,faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.change}>
        <div className={styles.logocom}>
          <img src="/Manga-removebg-preview.svg" alt="jk"  width="100px" height="50px"  />
        </div>
        <ul className={styles.navList}>
          <li  className={styles.navItem} ><Link to="/" className={styles.Link}>Home</Link></li>
          <li  className={styles.navItem}><Link  to="/about" className={styles.Link}>About</Link></li>
          <li  className={styles.navItem}><Link  to="/Login" className={styles.Link}>Login</Link></li>
        </ul>
        <div className= {styles.searchbar}>
            <input  class={styles.search} type="text" placeholder="Search here"/>
            <FontAwesomeIcon icon={faMagnifyingGlass} class={styles.magnify}/>
        </div>
        <div className={styles.location}>
          <p>Update Address</p>
          <img src="/map.png" alt="" width="40px" height="35px" />
        </div>
        <div className={styles.Flagcontain}>
            <div className={styles.box}>
              <p>Country</p>
              <img src="https://tse4.mm.bing.net/th/id/OIP.2A0rcBfwW_fDIuv9YM9JmQHaE8?pid=Api&P=0&h=220" alt="" width="52px"height="24px"/>
               </div>
          </div>
          <div className={styles.allcart}>
        <FontAwesomeIcon icon={faCartShopping} className={styles.cart} />
        <p>Cart</p>
          </div>
          <div className= {styles.notify}>
            <FontAwesomeIcon icon={faBell} className={styles.faBell} />
          </div>
        <div className={styles.profile}>
              <img src="/1-removebg-preview.png" alt="" width="30px" height="30px"/>
              <p> My Profile</p>
        </div>
      </div>
    </div>
  )
}

export default Navbar