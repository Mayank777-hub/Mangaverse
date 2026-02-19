import React from 'react'
import "./Login.css"
const Login = () => {
  return (
    <>
    <div className="showimg">
        <div className="logincolumn">
            <img src="/Manga-removebg-preview.svg" id="logo" alt="CompanyLogo"/>
            <div className="includelogin">
              <span><label htmlFor="Username">Username</label>
              &nbsp;&nbsp;&nbsp;
            <input type="text" placeholder="Username"/></span>
            <br />
            <span><label htmlFor="Password">Password</label>
            &nbsp;&nbsp;&nbsp;
            <input type="text" placeholder="Password"/></span>
            <br />
            <span><input type="checkbox" value=""/>
            <span>By Continuing you Accept Our Term & Condition and Policies</span></span>
            <br />
            <button className='Signbtn'>Login in</button>
            <a href="">Forget Password</a>
            <div className="logs">
                <button>
                    <img src="/google.png" alt="google" width="30px" height="30px"/>
                    Sign-in with Google</button>
                <button>
                    <img src="/twitter.png" alt="x" width="30px" height="30px"/>Sign-in with X</button>
            </div>
            <span className="spanall">
                <a href="">New to MangaVerse</a>
                <div className="recovery">
                    <img src="/recovery.png" alt="" className="recov"/>
                    <a href="">
                        Account Recovery
                    </a>
                </div>
            </span>
            </div>
        
        </div>
        <div className="containsimg">
            <img src="/Untitled design (4).png" alt="bgi"/>
        </div>
    </div>
    </>
  )
}

export default Login