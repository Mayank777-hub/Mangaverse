import { useRef, useState } from "react";
import React from 'react'
import "./cat.css";
import { motion,AnimatePresence } from "framer-motion";

function increment () {
let incre=0;
return function() {
 incre++;
 return incre;
}
}
const incrementnow = increment();
const category = [
    {
     color:"white",
      backgroundColor:"#14148e",
   id: "Food",
   product : [
    {id:incrementnow(),img:"https://www.blippo.com/cdn/shop/files/20251204-130_1bf470ac-7f69-4a87-a08a-45a3bd8f5909.jpg?v=1774585833",item:"Biscuits"},
    {id:incrementnow(),img:"https://www.japancandystore.com/cdn/shop/files/20220111_231_900x.jpg?v=1774598280",item:"Candies"},
    {id:incrementnow(),img:"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRM7mO50mgj1_iWk5HQsI_POdNH1-9QdctSYiYRgt-4_joZt6LinGSGf63T5o78LPzkuXHOPNKlBakVwZT-3FJsDJXTxaXJkTMkdUNTEao",item:"Cakes"},
    {id:incrementnow(),img:"https://www.japancandystore.com/cdn/shop/files/20220811_054_900x.jpg?v=1774594468",item:"Chocolates"},
    {id:incrementnow(),img:"https://i.etsystatic.com/13335828/r/il/caaa54/5567713909/il_1588xN.5567713909_cqna.jpg",item:"Cereals"},
    {id:incrementnow(),img:"https://www.bbassets.com/media/uploads/p/l/40335363_1-nissin-pokemon-ramen-fun-masala-instant-noodles.jpg",item:"Instant Noddles"},
    {id:incrementnow(),img:"https://candyfunhouse.ca/cdn/shop/files/cfh-2024-one-piece-energy-drink-cherry-tart-zero-sugar-candy-funhouse.jpg?v=1713469825&width=750",item:"Beverages"},
   ]

},
    {
       color:"white",
      backgroundColor:"#14148e",
   id: "Decoratives",
   product : [
    {id:incrementnow(),img:"https://m.media-amazon.com/images/I/61aswNLQr8L._SX522_.jpg",item:"Anime-Figures"},
    {id:incrementnow(),img:"https://m.media-amazon.com/images/I/8195i6kfdeL._AC_SL1500_.jpg",item:"Anime Tapestry"},
    {id:incrementnow(),img:"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQDCEMjUmyxzlI-2sG749qk2dKAZ8P1AaMxPJXgSq-BdV3QUiZnJNfWqTkCV5KN2ZxuE0_6w5My8OK8Rmc5Zaf24LyJin-sFw",item:"Bags"},
    {id:incrementnow(),img:"https://images.meesho.com/images/products/476225704/8uivg_512.avif?width=512",item:"Keychains"},
    {id:incrementnow(),img:"https://i.ebayimg.com/images/g/cqsAAOSwqzxhBUho/s-l1600.webp",item:"Lamps"},
    {id:incrementnow(),img:"https://i.ebayimg.com/images/g/KjMAAeSwYb1o3Tt-/s-l1600.webp",item:"Lunchbox"},
    {id:incrementnow(),img:"https://rukminim2.flixcart.com/image/1200/1200/xif0q/kid-table/g/u/i/39-plywood-kids-folding-table-doraemon-my-little-town-doraemon-original-imahfn847ghdnr3z.jpeg",item:"Movable-Tables"},
    {id:incrementnow(),img:"https://animemart.in/cdn/shop/files/Deku_All_Might_Phone_Cover.jpg?v=1760954474&width=800",item:"Phone-Cases"},
    {id:incrementnow(),img:"https://rukminim2.flixcart.com/image/1200/1200/xif0q/poster/c/i/v/medium-spy-x-family-large-frame-large-framed-poster-for-room-original-imahby7fgbs2yjyj.jpeg",item:"Posters"},
    {id:incrementnow(),img:"https://i.etsystatic.com/15251275/r/il/0cc539/1317841877/il_fullxfull.1317841877_j4ix.jpg",item:"Wall-Hangings"},
    {id:incrementnow(),img:"https://i.etsystatic.com/54400203/r/il/c1ced1/7103226655/il_1588xN.7103226655_4v7t.jpg",item:"Sippers"},
   ]

},
    {
      color:"white",
      backgroundColor:"#14148e",
   id: "Computer Accesseries",
   product : [
    {id:incrementnow(),img:"https://m.media-amazon.com/images/I/71Y1f0hMdgL._AC_SL1500_.jpg",item:"Cooling pads"},
    {id:incrementnow(),img:"https://animepads.com/cdn/shop/files/6.3_1.jpg?v=1710313688",item:"Desk Mate"},
    {id:incrementnow(),img:"https://m.media-amazon.com/images/I/81R+niO-YaL._AC_SX466_.jpg",item:"headPhone"},
    {id:incrementnow(),img:"https://m.media-amazon.com/images/I/718HBELgbWL._AC_SL1500_.jpg",item:"Keyboard"},
    {id:incrementnow(),img:"https://i.etsystatic.com/57510460/r/il/5821b7/6890714657/il_1588xN.6890714657_22hj.jpg",item:"Laptop Covers"},
    {id:incrementnow(),img:"https://i.etsystatic.com/60897877/r/il/58a09d/7503072662/il_1588xN.7503072662_75g6.jpg",item:"Speaker"},
    {id:incrementnow(),img:"https://m.media-amazon.com/images/I/61YcOoxMrEL._AC_SY300_SX300_QL70_FMwebp_.jpg",item:"Mouse"},
     {id:incrementnow(),img:"https://i.etsystatic.com/29843644/r/il/6c5ed7/7783249577/il_1588xN.7783249577_7dyg.jpg",item:"Game Controllers"},
   ]

},
]
const Catslide = () => {
  const [slider,Setslide] = useState(category[0]);
  const Slideref = useRef(null);
  const scrollL = useRef(0);
  const checkcat = category.find(c=> c.id === slider.id);
  const handleslideL = (cate)=>{
    Setslide(cate);
    if(Slideref.current){
      Slideref.current.scrollLeft = 0;
    }
  }
  const scrollleft =()=>  {
    if(Slideref.current){
   Slideref.current.scrollLeft += 250;
    }
  }
  const scrollright =()=>  {
    if(Slideref.current){
   Slideref.current.scrollLeft -= 250;
    }
  }
  //function scrollleft(scrollL){
  //  scrollL.current.scroll += 20;
  //}
  //function scrollleft(scrollL){
  // scrollL.ref.scroll -= 20;
  //}
  return (
    <>
    <div className="slidecatbox" style={{width:"75vw",height:'40vh'}}>
    <div className="catbtn">
       {category.map((cat)=>{
       const isActive =  slider.id === cat.id;
       return (
        <AnimatePresence>
        <motion.button onClick={()=>handleslideL(cat)}
          key={cat.id}
         className = {`catclick ${isActive? "slider"  : ""}`}
         // WhiteTap = {{scale:0.95}}
        >          
         {cat.id}
        </motion.button>
        </AnimatePresence>
       )
       })
      }
    </div>
    <div className="catcontainer"  >
      <AnimatePresence mode ="wait">
       <motion.div
       key={slider.id}
       initial={{opacity:0,y:-30}}
       animate={{opacity:1,y:0}}
       exit={{opacity:0,y:30}}
       transition={{duration:0.3}}
       className="changeui"
       ref={Slideref}
       >
        {slider.product.map((c)=>(
             <div className="overcat">
              <img src={c.img} alt = "" className="catimg" />
              <p>{c.item}</p>
             </div>
        ))}
       
       </motion.div>
      </AnimatePresence>
       <div className="catbtns">
          <span className="leftc" onClick={scrollright}>{"<"}</span>
<span className="rightc" onClick={scrollleft}>{">"}</span>
        </div>
    </div>
    </div>
    </>
  )
}

export default Catslide
