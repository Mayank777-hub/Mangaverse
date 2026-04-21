import React from 'react'
import "./cat.css";

function increment () {
let incre=0;
return function() {
 incre++;
 return incre;
}
}

const category = [
    {
   id: "Food",
   product : [
    {id:increment(),img:"https://www.blippo.com/cdn/shop/files/20251204-130_1bf470ac-7f69-4a87-a08a-45a3bd8f5909.jpg?v=1774585833",item:"Biscuits"},
    {id:increment(),img:"https://www.japancandystore.com/cdn/shop/products/online_bl_-35_1_2_900x.jpg?v=1675390756",item:"Candies"},
    {id:increment(),img:"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRM7mO50mgj1_iWk5HQsI_POdNH1-9QdctSYiYRgt-4_joZt6LinGSGf63T5o78LPzkuXHOPNKlBakVwZT-3FJsDJXTxaXJkTMkdUNTEao",item:"Cakes"},
    {id:increment(),img:"https://www.japancandystore.com/cdn/shop/products/20211026_011_900x.jpg?v=1675388446",item:"Chocolates"},
    {id:increment(),img:"https://i.etsystatic.com/13335828/r/il/caaa54/5567713909/il_1588xN.5567713909_cqna.jpg",item:"Cereals"},
    {id:increment(),img:"https://www.bbassets.com/media/uploads/p/l/40335363_1-nissin-pokemon-ramen-fun-masala-instant-noodles.jpg",item:"Instant Noddles"},
    {id:increment(),img:"https://candyfunhouse.ca/cdn/shop/files/cfh-2024-one-piece-energy-drink-cherry-tart-zero-sugar-candy-funhouse.jpg?v=1713469825&width=750",item:"Beverages"},
   ]

},
    {
   id: "Decoratives",
   product : [
    {id:increment(),img:"https://m.media-amazon.com/images/I/61aswNLQr8L._SX522_.jpg",item:"Anime-Figures"},
    {id:increment(),img:"https://m.media-amazon.com/images/I/51jxrjntIpL._SS40_.jpg",item:"Anime Tapestry"},
    {id:increment(),img:"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQDCEMjUmyxzlI-2sG749qk2dKAZ8P1AaMxPJXgSq-BdV3QUiZnJNfWqTkCV5KN2ZxuE0_6w5My8OK8Rmc5Zaf24LyJin-sFw",item:"Bags"},
    {id:increment(),img:"https://images.meesho.com/images/products/476225704/8uivg_512.avif?width=512",item:"Keychains"},
    {id:increment(),img:"https://i.ebayimg.com/images/g/cqsAAOSwqzxhBUho/s-l1600.webp",item:"Lamps"},
    {id:increment(),img:"https://i.ebayimg.com/images/g/KjMAAeSwYb1o3Tt-/s-l1600.webp",item:"Lunchbox"},
    {id:increment(),img:"https://rukminim2.flixcart.com/image/1200/1200/xif0q/kid-table/g/u/i/39-plywood-kids-folding-table-doraemon-my-little-town-doraemon-original-imahfn847ghdnr3z.jpeg","https://m.media-amazon.com/images/I/31BCV6bFlPS.jpg","https://rukminim2.flixcart.com/image/1200/1200/xif0q/kid-table/m/c/v/39-plywood-kids-folding-table-doraemon-my-little-town-doraemon-original-imahfn84ghagyghm.jpeg",item:"Movable-Tables"},
     {id:increment(),img:"https://animemart.in/cdn/shop/files/Deku_All_Might_Phone_Cover.jpg?v=1760954474&width=800",item:"Phone-Cases"},
    {id:increment(),img:"https://rukminim2.flixcart.com/image/1200/1200/xif0q/poster/c/i/v/medium-spy-x-family-large-frame-large-framed-poster-for-room-original-imahby7fgbs2yjyj.jpeg",item:"Posters"},
    {id:increment(),img:"https://i.etsystatic.com/15251275/r/il/0cc539/1317841877/il_fullxfull.1317841877_j4ix.jpg",item:"Wall-Hangings"},
    {id:increment(),img:"https://i.etsystatic.com/54400203/r/il/c1ced1/7103226655/il_1588xN.7103226655_4v7t.jpg",item:"Sippers"},
   ]

},
    {
   id: "Food",
   product : [
    {id:increment(),img:"https://www.blippo.com/cdn/shop/files/20251204-130_1bf470ac-7f69-4a87-a08a-45a3bd8f5909.jpg?v=1774585833",item:"Biscuits"}
    {id:increment(),img:"https://www.japancandystore.com/cdn/shop/products/online_bl_-35_1_2_900x.jpg?v=1675390756",item:"Candies"},
    {id:increment(),img:"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRM7mO50mgj1_iWk5HQsI_POdNH1-9QdctSYiYRgt-4_joZt6LinGSGf63T5o78LPzkuXHOPNKlBakVwZT-3FJsDJXTxaXJkTMkdUNTEao",item:"Cakes"},
    {id:increment(),img:"https://www.japancandystore.com/cdn/shop/products/20211026_011_900x.jpg?v=1675388446",item:"Chocolates"},
    {id:increment(),img:"https://i.etsystatic.com/13335828/r/il/caaa54/5567713909/il_1588xN.5567713909_cqna.jpg",item:"Cereals"},
    {id:increment(),img:"https://www.bbassets.com/media/uploads/p/l/40335363_1-nissin-pokemon-ramen-fun-masala-instant-noodles.jpg",item:"Instant Noddles"},
    {id:increment(),img:"https://candyfunhouse.ca/cdn/shop/files/cfh-2024-one-piece-energy-drink-cherry-tart-zero-sugar-candy-funhouse.jpg?v=1713469825&width=750",item:"Beverages"},
   ]

},
]
const catslide = () => {
  return (
    <>
    </>
  )
}

export default catslide
