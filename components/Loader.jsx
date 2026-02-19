import React from 'react'
//import imagesz from "image-removebg-preview(17).png"
import "./Loader.css"
const Loader = () => {
  return (
    <>
     <div className="main">
        <div className="centeral">
            <img className="imgload"src= "/Loader.png"width="100%" height="100%" alt=""/>
            <div className="rot">
            </div>
            <h1 className="loadsall">Loading...</h1>
            <div className="hole">
  <i className="i"></i>
  <i className="i"></i>
  <i className="i"></i>
  <i className="i"></i>
  <i className="i"></i>
  <i className="i"></i>
  <i className="i"></i>
  <i className="i"></i>
  <i className="i"></i>
  <i className="i"></i>
</div>
        </div>
    </div>
    </>
  )
}

export default Loader