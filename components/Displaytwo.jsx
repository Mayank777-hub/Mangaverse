import React from 'react'
import "./displaytwo.css"
const Displaytwo = () => {
  return (
   // <div>displaytwo</div>
   <>
   <div className="show">
    <div className="boxes">
      <div className="buttons">
        <button className="onefirst"><i className="fa-solid fa-arrow-left"></i></button>
        <button className="onesecond"><i className="fa-solid fa-arrow-right"></i></button>
      </div>
      <div className="inner">
        <div className="box o"><img
            src="https://static1.srcdn.com/wordpress/wp-content/uploads/2024/05/sakamoto-days-anime-poster.jpg"
            alt="product"/>
          <div className="displayok">
            <div className="name">Sakamoto Days, Vol. 2</div>
          </div>
        </div>
        <div className="box two"><img
            src="https://static1.srcdn.com/wordpress/wp-content/uploads/2023/05/blue-lock-tv-series-poster.jpg"
            alt="product"/>
          <div className="displayok">
            <div className="name">Blue Lock 1</div>
          </div>
        </div>
        <div className="box o"><img src="https://dw9to29mmj727.cloudfront.net/products/1974755363.jpg" alt="product"/>
          <div className="displayok">
            <div className="name">Record of Ragnarok 16</div>
          </div>
        </div>
        <div className="box o"><img src="https://dw9to29mmj727.cloudfront.net/products/1974758540.jpg" alt="product"/>
          <div className="displayok">
            <div className="name">Chainsaw Man, Vol. 19</div>
          </div>
        </div>
        <div className="box o"><img src="https://dw9to29mmj727.cloudfront.net/products/1974757927.jpg" alt="product"/>
          <div className="displayok">
            <div className="name">Dan Dadan 15</div>
          </div>
        </div>
        <div className="box o"><img src="https://dw9to29mmj727.cloudfront.net/products/1974758168.jpg" alt="product"/>
          <div className="displayok">
            <div className="name">One-Punch Man, Vol. 32</div>
          </div>
        </div>
        <div className="box o"><img src="https://dw9to29mmj727.cloudfront.net/products/1974754669.png" alt="product"/>
          <div className="displayok">
            <div className="name">Moan: Junji Ito Story</div>
          </div>
        </div>
        <div className="box o"><img src="https://dw9to29mmj727.cloudfront.net/products/1974717429.jpg" alt="product"/>
          <div className="displayok">
            <div className="name">Tokyo Ghoul:re Illustrations: zakki</div>
          </div>
        </div>
        <div className="box o"><img src="https://dw9to29mmj727.cloudfront.net/products/197475863X.jpg" alt="product"/>
          <div className="displayok">
            <div className="name">Pokémon: Scarlet & Violet, Vol. 3</div>
          </div>
        </div>
      </div>
    </div>
    <div className="pro">
      <div className="procontainer">
        <i>Latest Manga</i>
        <i>Collection</i>
      </div>
    </div>
  </div>
   </>
  )
}

export default Displaytwo