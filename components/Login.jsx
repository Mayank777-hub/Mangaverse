import React from 'react'
import "./Login.css"
const Login = () => {
  return (
    <>
    <div class="showimg">
        <div class="logincolumn">
            <img src="/Manga-removebg-preview.svg" id="logo" alt="CompanyLogo"/>
        <span><label for="">Username</label>
            <input type="text" placeholder="Username"/></span>
            <span><label for="">Password</label>
            <input type="text" placeholder="Password"/></span>
            <span><input type="checkbox" value=""/>
            <span>By Continuing you Accept Our Term & Condition and Policies</span></span>
            
            <button>Login in</button>
            <a href="">Forget Password</a>
            <div class="logs">
                <button>
                    <img src="/google.png" alt="google" width="30px" height="30px"/>
                    Sign-in with Google</button>
                <button>
                    <img src="/twitter.png" alt="x" width="30px" height="30px"/>Sign-in with X</button>
            </div>
            <span class="spanall">
                <a href="">New to MangaVerse</a>
                <div class="recovery">
                    <img src="/recovery.png" alt="" class="recov"/>
                    <a href="">
                        Account Recovery
                    </a>
                </div>
            </span>
        </div>
        <div class="containsimg">
            <img src="/Untitled design (4).png" alt="bgi"/>
        </div>
    </div>
    </>
  )
}

export default Login