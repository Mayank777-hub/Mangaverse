import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faXTwitter, faFacebook, faReddit } from '@fortawesome/free-brands-svg-icons'
import "./Footer.css"
import  imageSrc from"/google-play-badge.png";
const Footer = () => {
    return (
        <div className='hollow'>
            <div className='navtwo'>
                <span><a href="/" className='a'>Need Help ?</a></span>
                <span><a href="/" className='a'>Connect Us</a></span>
                <span><a href="/" className='a'>Company Policies</a></span>
                <span><a href="/" className='a'>Feedback</a></span>
            </div>
            <div className='proper'>
                <div className='boxlast'>
                    <div>Visit Help Centre</div>
                    <div>Contact us</div>
                    <div>1834-256-1667</div>
                </div>
                <div className='icons'>
                 <div className='conn'>
                    <a href="/" className='loc'> <FontAwesomeIcon icon={faEnvelope} /></a>
                    <a href="/" className='loc'> <FontAwesomeIcon icon={faXTwitter} /></a>
                    <a href="/" className='loc'> <FontAwesomeIcon icon={faFacebook} /></a>
                    <a href="/" className='loc'> <FontAwesomeIcon icon={faReddit} /></a>
                </div>
                <div className='connex'>
                    <div><a className="cox" href="/">Mangaverse@gmail.com</a></div>
                    <div><a className="cox" href="/">Mangaverse_verse     </a></div>
                    <div><a className="cox" href="/">MangaVerse404       </a></div>
                    <div><a className="cox" href="/">r/Mangaverse        </a></div>
                </div>
                </div>
               
                <div className='chan'>
                    <div>User Policy</div>
                    <div>Seller Policy</div>
                    <div>Privacy Policy</div>
                </div>
                <div className='last'>
                    <div>Give Suggestion</div>
                    <img  src={imageSrc} alt="hello"  width="150px" height="50px" />
                </div>
            </div>
            <div className='akri'>
                <div>Mangaverse&copy;.All Right reserved</div>
                <div>Terms & Condition&nbsp;&nbsp;|FAQ&nbsp;&nbsp;|Advertisement</div>
            </div>
        </div>
    )
}

export default Footer
