import React, { useEffect, useState } from 'react'
import styles from "./Navbar.module.css"
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faCartShopping, faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons/faPhone'
const Navbar = () => {
  const [search, setsearch] = useState("");
  const [dialog,setdialog] = useState(false);
  const[country,setcountry] = useState([]);
  const[state,setstate] = useState([]);
  const[selectcountry,setselectcountry] = useState("");
  const move = useNavigate(); const loc = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(loc.search);
    const query = params.get('query');
    
    if (query) {
      setsearch(query); 
    } else if (loc.pathname === '/') {
      setsearch(''); 
    }
  }, [loc.search, loc.pathname]);
  const searchuser = (e) => {
    if (e.key === "Enter" && search.trim() !== "") {
      move(`/search?query=${search}`)
    }
  }

  useEffect(() => {
  const response = fetch('https://api.countrystatecity.in/v1/countries', {
  headers: { 'X-CSCAPI-KEY': 'c9f4cbc29b2c8dd5135db17d521b6e492f654e9d8a3f19f73bea3c9765d953bd' }
  .then(d => d.json())
  .then(con => {setcountry(con.con)})
})
   .catch(error => console.log(error));
   
  }, [third])
  
  return (
    <div className={styles.container}>
      <div className={styles.change}>
        <div className={styles.logocom}>
          <img src="/Manga-removebg-preview.svg" alt="jk" width="100px" height="50px" />
        </div>
        <ul className={styles.navList}>
          <li className={styles.navItem} ><Link to="/" className={styles.Link}>Home</Link></li>
          <li className={styles.navItem}><Link to="/about" className={styles.Link}>About</Link></li>
          <li className={styles.navItem}><Link to="/Login" className={styles.Link}>Login</Link></li>
        </ul>
        <div className={styles.searchbar}>
          <input className={styles.search} type="text" placeholder="Search here" value={search} onChange={(e) => setsearch(e.target.value)} onKeyDown={searchuser} />
          <FontAwesomeIcon icon={faMagnifyingGlass} className={styles.magnify} />
        </div>
        <div className={styles.location}>
          <p onClick={()=>setdialog(true)}>Customer Address</p>
          { dialog && (
            <div className={styles.adddia}>
              <div className={styles.Disadd}>
                <span className={styles.spelladd}><b>Update Address</b></span>
                <button className={styles.closeadd} onClick={()=>setdialog(false)}>
                <FontAwesomeIcon icon={ faXmark} />
              </button>
              </div>
              <div className={styles.upperaddcol}>
                   <div className={styles.deopcoun}>
                <label htmlFor="">Country</label>
                &nbsp;&nbsp;&nbsp;&nbsp;
              <select name="" id="" size="5">
                <option value=""></option>
              </select>
              </div>
              <div className={styles.deopstate}>
                <label htmlFor="">State</label>
              <select name="" id="">
                <option value=""></option>
              </select>
              </div>
              </div>
             <div className={styles.secondcolmid}>
               <div className={styles.deopaddres}>
                <label htmlFor="">Address</label>
                <input type="text" placeholder='Enter your address here...' />
              </div>
             </div>
             <div className={styles.middlecol}>
              <div className={styles.deopaddres}>
                <label htmlFor="">Landmark</label>
                <input type="text" placeholder='' />
              </div>
              <div className={styles.phoneadd}>
                <label htmlFor=""> <FontAwesomeIcon icon={faPhone}/>Phone number</label>
                <input type="number" name="" id="" />
              </div>
             </div>
             <div className={styles.Saveadd}>
              <input type="checkbox" name="" id=""/>
              <span className='saveadd'>Save Address for Delivery</span>
             </div>
            </div>
          )
          }
          <img src="/map.png" alt="" width="40px" height="35px" />
        </div>
        <div className={styles.Flagcontain}>
          <div className={styles.box}>
            <p>Country</p>
            <img src="https://tse4.mm.bing.net/th/id/OIP.2A0rcBfwW_fDIuv9YM9JmQHaE8?pid=Api&P=0&h=220" alt="" width="52px" height="24px" />
          </div>
        </div>
        <div className={styles.allcart}>
          <FontAwesomeIcon icon={faCartShopping} className={styles.cart} />
          <p>Cart</p>
        </div>
        <div className={styles.notify}>
          <FontAwesomeIcon icon={faBell} className={styles.faBell} />
        </div>
        <div className={styles.profile}>
          <img src="/1-removebg-preview.png" alt="" width="30px" height="30px" />
          <p> My Profile</p>
        </div>
      </div>
    </div>
  )
}

export default Navbar