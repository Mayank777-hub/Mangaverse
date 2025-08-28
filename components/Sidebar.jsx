import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Player } from '@lordicon/react';
import {  useState, useRef } from 'react'
import globeIcon from "../src/assets/globe.json";
import searchIcon from "../src/assets/search.json";
import saleIcon from "../src/assets/sale.json";
import categoryIcon from "../src/assets/category.json";
import updateIcon from "../src/assets/update.json";
import settingsIcon from "../src/assets/settings.json";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import styles from "./Sidebar.module.css"  


const Sidebar = () => {
    const [issee, setissee] = useState(false)
    const [drag, setdrag] = useState({x:0, y:325})
    const firstref = useRef(false);
    const playerRef = useRef(null);
    const playertwoRef = useRef(null);
    const playerthreeRef = useRef(null);
    const playerfourRef = useRef(null);
    const playerfiveRef = useRef(null);
    const playersixRef = useRef(null);
    const handleMouseOver = () => {
    if (searchRef.current && !searchRef.current.isPlaying) {
      searchRef.current.playFromBeginning();
    }
  };

    const handleMousedown = (e) => {
        firstref.current = {
            offsetX: e.clientX - drag.x,
            offsetY: e.clientY - drag.y,
        };
        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseup", handleMouseup);
    }

    const handleMouseMove = (e) => {
        if(!firstref.current) return;
        setdrag({
            x: e.clientX - firstref.current.offsetX,
            y: e.clientY - firstref.current.offsetY,
        })
    }

    const handleMouseup = () => {
        firstref.current = false;
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseup);
    }

    return (
        <>
        <div className='sidebar'>
            <div 
                className={styles.btn} 
                onMouseDown={handleMousedown} 
                style={{
                    position: "absolute",
                    cursor: "pointer",
                    top: drag.y,
                    left: drag.x
                }} 
                onClick={() => setissee(true)}
            >
                <FontAwesomeIcon icon={faBars} />
            </div>

            <div className={`${styles.slide} ${issee ? styles.see : ""}`}>  
                <ul className={styles.sidebarUl}>  
                    <div className={styles.do}>
                        <img src="/Manga-removebg-preview.svg" alt="tm" className={styles.in} />
                        <div className={styles.cancel} onClick={() => setissee(false)}>  
                            <FontAwesomeIcon icon={faXmark} />
                        </div> 
                    </div>
                    
                    <li className={styles.sidebarLi}>  
                        <a href="#" className={styles.sidebarA}> 
                             <div  onMouseEnter={() => playerRef.current?.playFromBeginning()}
                                   onMouseLeave={() => playerRef.current?.stop()}
                                   style={{ width: '20px', cursor: 'pointer' }}>
                            <Player 
                            icon={searchIcon}    
                              ref={playerRef}
                                size={20} 
                                autoplay={false}
                                loop={false}
                                colors="primary:#ffffff,secondary:#ffffff" 
                                />
                                
                                </div>
                            <h3 className={styles.search}>Search</h3>
                        </a>
                    </li>

                    <li className={styles.sidebarLi}>
                        <a href="#" className={styles.sidebarA}>
                            <div onMouseEnter={() => playertwoRef.current?.playFromBeginning()}
                                   onMouseLeave={() => playertwoRef.current?.stop()}
                                   style={{ width: '20px', cursor: 'pointer' }}>
                                 <Player  ref={playertwoRef} icon={globeIcon}   autoplay={false}
                                loop={false} size={20}   colors="primary:#ffffff,secondary:#ffffff" />
                            </div>
                            <h3 className={styles.community}>Community</h3>
                        </a>
                    </li>

                    <li className={styles.sidebarLi}>
                        <a href="#" className={styles.sidebarA}>
                            <div  onMouseEnter={() => playerthreeRef.current?.playFromBeginning()}
                                   onMouseLeave={() => playerthreeRef.current?.stop()}
                                   style={{ width: '20px', cursor: 'pointer' }}><Player  ref={playerthreeRef} icon={saleIcon} size={20}  autoplay={false}
                                loop={false} colors="primary:#ffffff,secondary:#ffffff"/></div>
                            
                            <h3 className={styles.sale}>Sales & Offer's</h3>
                        </a>
                    </li>

                    <li className={styles.sidebarLi}>
                        <a href="#" className={styles.sidebarA}>
                            <div 
                            onMouseEnter={() => playerfourRef.current?.playFromBeginning()}
                                   onMouseLeave={() => playerfourRef.current?.stop()}
                                   style={{ width: '20px', cursor: 'pointer' }}>
                            <Player ref={playerfourRef} icon={categoryIcon} size={20}   autoplay={false}
                                loop={false} colors="primary:#ffffff,secondary:#ffffff"/>
                                </div>
                            <h3 className={styles.category}>Category</h3>
                        </a>
                    </li>

                    <li className={styles.sidebarLi}>
                        <a href="#" className={styles.sidebarA}>
                            <div onMouseEnter={() => playerfiveRef.current?.playFromBeginning()}
                                   onMouseLeave={() =>playerfiveRef.current?.stop()}
                                   style={{ width: '20px', cursor: 'pointer' }}>
                                <Player  ref={playerfiveRef} icon={updateIcon} size={20}  autoplay={false}
                                loop={false}  colors="primary:#ffffff,secondary:#ffffff" />
                            </div>
                            
                            <h3 className={styles.update}>New Updates</h3>
                        </a>
                    </li>

                    <li className={styles.sidebarLi}>
                        <a href="#" className={styles.sidebarA}>
                            <div onMouseEnter={() => playersixRef.current?.playFromBeginning()}
                                   onMouseLeave={() =>playersixRef.current?.stop()}
                                   style={{ width: '20px', cursor: 'pointer' }} >
                                <Player  ref={playersixRef} icon={settingsIcon} size={20}   autoplay={false}
                                loop={false} colors="primary:#ffffff,secondary:#ffffff" />
                            </div>
                            <h3 className={styles.set}>Setting</h3>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        </>
    )
}

export default Sidebar;