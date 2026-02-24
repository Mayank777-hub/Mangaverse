import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import "./Sliderone.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowLeft,faCircleArrowRight } from '@fortawesome/free-solid-svg-icons'
const Sliderone = () => {
//    const HandleClickLeft = () => {
//  const element = document.getElementsByClassName("inrogif")[0];
//  element.scrollLeft -= 300;
//};
//
//    const HandleClickRight = () => {
//        const Right = document.getElementsByClassName("inrogif")[0];
//        Right.scrollLeft += 300;
//    };
const navigate = useNavigate();
const scrollRef =useRef(null);
const HandleClickLeft = () => {
    if(scrollRef.current)
        scrollRef.current.scrollLeft -= 160;
}

const HandleClickRight = () => {
    if(scrollRef.current)
        scrollRef.current.scrollLeft += 160;
}
const move = (cat=>{
    navigate(`/category/${cat}`)
})
  return (
    <>
    <div className="sonecompo">
        <h3 className="bush3">Browse&nbsp;by&nbsp;Categories</h3>
    <div className="inrogif" ref={scrollRef}>
        <div className="boxone" onClick={() => move("Shonen")}>
            <img src="https://media1.tenor.com/m/-tLLUJNXlOYAAAAC/among-us-attack-on-titan.gif" alt="Gif1" width="150px"
                height="150px" id="gif"/>
            <div className="above">
                Shonen
            </div>
        </div>
        <div className="boxone" onClick={() => move("Shojo")}>
            <img src="https://media.tenor.com/ciXVEY9J2BUAAAAi/sailor-moon-usagi.gif" alt="Gif2" width="150px" height="150px"
                id="gif"/>
            <div className="above">
                Shojo
            </div>
        </div>
        <div className="boxone" onClick={() => move("Kodomo")}>
            <img src="https://media1.tenor.com/m/rNQUUur3zu8AAAAC/shinchan-sinchan.gif" alt="Gif1" width="150px"
                height="150px" id="gif"/>
            <div className="above">
                Kodomo
            </div>
        </div>
        <div className="boxone" onClick={() => move("Seinen")}>
            <img src="https://media1.tenor.com/m/lxjWJK0Ny3AAAAAd/thofinn.gif" alt="Gif1" width="150px" height="150px"
                id="gif"/>
            <div className="above">
                Seinen
            </div>
        </div>
        <div className="boxone" onClick={() => move("Mecha")}>
            <img src="https://media1.tenor.com/m/VAOGPuUCNRIAAAAC/gundam-seed-gundam.gif" alt="Gif1" width="150px"
                height="150px" id="gif"/>
            <div className="above">
                Mecha
            </div>
        </div>
        <div className="boxone" onClick={() => move("Isekai")}>
            <img src="https://media1.tenor.com/m/kWGX4AZkn24AAAAd/mushoku-tensei.gif" alt="Gif1" width="150px"
                height="150px" id="gif"/>
            <div className="above">
                Isekai
            </div>
        </div>

        <div className="boxone" onClick={() => move("Ecchi")}>
            <img src="https://media1.tenor.com/m/bMFBeKf7tIsAAAAC/prison-school-kangoku-gakuen.gif" alt="Gif1"
                width="150px" height="150px" id="gif"/>
            <div className="above">
                Ecchi
            </div>
        </div>
        <div className="boxone" onClick={() => move("Harem")}>
            <img src="https://media1.tenor.com/m/Sz-4C9TeOd4AAAAd/moka-anime.gif" alt="Gif1" width="150px"
                height="150px" id="gif"/>
            <div className="above">
                Harem
            </div>
        </div>
        <div className="boxone" onClick={() => move("Josei")}>
            <img src="https://media1.tenor.com/m/G1abVPjr0-YAAAAd/hachimitsu-to-clover-honey-and-clover.gif" alt="Gif1"
                width="150px" height="150px" id="gif"/>
            <div className="above">
                Josei
            </div>
        </div>

        <div className="boxone" onClick={() => move("Reverse Harem")}>
            <img src="https://media1.tenor.com/m/n7Td88aoYdYAAAAC/ohshc.gif" alt="Gif1" width="150px" height="150px"
                id="gif"/>
            <div className="above">
            R-Harem
            </div>
        </div>

        <div className="boxone" onClick={() => move("Hentai")}>
            <img src="https://media1.tenor.com/m/jlhYA4M2OC8AAAAC/sakura-kinomoto-cardcaptor-sakura.gif" alt="Gif1"
                width="150px" height="150px" id="gif"/>
            <div className="above">
                Shonen
            </div>
        </div>

        <div className="boxone" onClick={() => move("Sports")}>
            <img src="https://media.tenor.com/lAH5XpNMpPcAAAAM/haikyuu-mad-dog.gif" alt="Gif1" width="150px"
                height="150px" id="gif"/>
            <div className="above">
                Sports
            </div>
        </div>
    </div>
    </div>
    <div className='scrollandr'>
        <button className='btn1' onClick={HandleClickLeft}>
        <FontAwesomeIcon icon={faCircleArrowLeft} size="3x" style={{ color: "yellow",borderRadius:"25px"}}/>
    </button>
    <button className='btn2' onClick={HandleClickRight}>
         <FontAwesomeIcon icon={faCircleArrowRight} size="3x" style={{color:"yellow",borderRadius:"25px"}}/>
    </button>
    </div>
    </>
  )
}

export default Sliderone