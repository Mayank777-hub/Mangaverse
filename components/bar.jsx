import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { producttemp } from './search';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faTag, faThumbsDown, faShare, faIndianRupeeSign, faCartShopping, faStar, faStarHalf } from "@fortawesome/free-solid-svg-icons"
import Loader from './Loader';
import "./searchresult.css"
//import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
//import imageone from './5155wzILS2L_imgupscaler.ai_General_8K.jpg'
const bar = () => {
  const loc = useLocation();
  const que = new URLSearchParams(loc.search).get("query");

  const [product, setProduct] = useState(null);
  const [Loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showCoupon, setShowCoupon] = useState(false);
  const [couponCode, setCouponCode] = useState("");
  const [availablecoupon, setavailablec] = useState([]);
  //const [couponCode, setCouponCode] = useState("");
  const [applied, setApplied] = useState(null);
  const [priceDetails, setPriceDetails] = useState(null);

  //let starting = Date.now();  // yeh hama hameer start point


  useEffect(() => {
    if (!que) return;
    let starting = Date.now();
    setProduct(null);
    setLoading(true);
    setError(null);

    fetch(`http://localhost:3900/api/products/test?search=${que}`)
      .then(res => {
        if (!res.ok) {
          return res.json().then(err => {
            throw new Error(err.message || "Unable to connect due to network issue")
          });
        }
        return res.json();
      })
      .then(d => {

        let remainsp = Date.now() - starting;
        let remain = Math.max(3000 - remainsp, 0);

        setTimeout(() => {
          setProduct(d.allmangadata);
          setLoading(false);
        }, remain);

      })
      .catch(err => {
        console.log(err);

        let remainsp = Date.now() - starting;
        let remain = Math.max(3000 - remainsp, 0);
        setTimeout(() => {
          setError(err.message);
          setLoading(false)
        }, remain);
      });
  }, [que])

  useEffect(() => {
    if (product && !Loading && product.length > 0) {
      console.log('Full product data:', product[0]);
      console.log('Type array:', product[0].Type);
      console.log('First Type item:', product[0].Type?.[0]);
      console.log('Animeurl:', product[0].Type?.[0]?.Animeurl);

      producttemp();
    }
  }, [product, Loading]);


  if (Loading) return <Loader />;/*</Loader>*/
  if (error) return <div className="error">Error :{error}</div>;
  if (!product || product.length === 0) {
    return <div className="nopro">No Search item Available</div>;
  }
  //const item = product.Type[0];
  //const item = product[0]?.Type?.[0];


  const rawItem = product[0];
  let item;


  if (rawItem.Type && rawItem.Type.length > 0) {

    item = rawItem.Type[0];
  } else {
    // Food/Decoratives structure 
    item = rawItem;
  }
  const originalValue = item.Originalvalue || rawItem.Originalvalue || 0;
  const previousValue = item.previousvalue || rawItem.previousvalue || originalValue;
  const discountPercent = previousValue && originalValue
    ? Math.round(((item.previousvalue - item.Originalvalue) / item.previousvalue) * 100)
    : 0;

  const Paynow = async () => {
    try {
      const go = await fetch(`http://localhost:6974/order`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          price: originalValue,
          cat: rawItem.ItemType,
          vouchget: applied || ""
        }),
      })
      const result = await go.json();

      if (!result.success) {
        alert("Order Not Initiated Check Your network And try Again");
        return;
      }
      setPriceDetails(result.bill);
      const order = result.order;
      const solution = {
        key: import.meta.env.VITE_RAZOR_KEY,
        amount: order.amount,
        currency: "INR",
        order_id: order.id,
        handler: async function (response) {
          const Presponse = await fetch("http://localhost:6974/verifypayment", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(response),
          });
          const conj = await Presponse.json();
          if (conj.success) {
            //  const coupRes = await fetch("http://localhost:6974/generatevoucher");
            // const coupData = await coupRes.json();

            // alert(`Payment successful!\nVoucher: ${coupData.coupon.vouchget}`);
            if (conj.coupon) {
              const old = JSON.parse(localStorage.getItem("coupons")) || [];
              localStorage.setItem("coupons", JSON.stringify([...old, conj.coupon]));
              alert(`Surprise! Coupon: ${conj.coupon.vouchget}`);
            } else {

              
              alert("Payment successfull.Happy Shopping ;-)");
            }
          } else {
            alert("Payment verification failed ");
          }
        },
        theme: {
          color: "#2e1d8ba2",
        }
      }
      const poprazor = new window.Razorpay(solution);
      poprazor.open();
    }
    catch (error) {
      if (!window.Razorpay) {
        alert("Payment SDK not loaded. Try again.");
        return;
      }
      console.log(error);
    }
  }

  const applyCoupon = async () => {
    const res = await fetch("http://localhost:6974/applyvoucher", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        price: originalValue,
        cat: rawItem.ItemType,
        vouchget: couponCode
      })
    });

    const data = await res.json();

    if (!data.success) {
     // alert(data.msg);
      return;
    }

    setPriceDetails({
      finalAmount: data.finalAmount,
      discount: data.discount
    });

    setApplied(couponCode);
  };

  const availableC = async () => {
    try {
      const usersol = await fetch("http://localhost:6974/generatevoucher");
      const weget = await usersol.json();
      console.log(weget.coupon);
      if (weget.coupon) {
        setavailablec((old) => [...old, weget.coupon]);
      }
      else {
        setavailablec([]);
      }
    } catch (error) {
      console.log(error);
    }
  }

  const loadCoupons = () => {
    const coupons = JSON.parse(localStorage.getItem("coupons")) || [];
    setavailablec(coupons);
  };

  //const verifyPayment = async () => {
  //  const res = await fetch("/verifypayment", { method: "POST" });
  //  const data = await res.json();
  //
  //  if (data.coupon) {
  //    const old = JSON.parse(localStorage.getItem("coupons")) || [];
  //    localStorage.setItem("coupons", JSON.stringify([...old, data.coupon]));
  //  }
  //};
  return (
    <>
      <div className="containerall">
        <div className="img-container" id="imgContainer">
          <div className="img-area" id="imgarea">
            <div className="flip-inner" id="flipInner">
              <div className="flip-front">
                <img id="productFront" src={item?.Animeurl || "/5155wzILS2L_imgupscaler.ai_General_8K.jpg"} />
              </div>
              <div className="flip-back">
                <img id="productBack" src={"/back.jpg"} />
              </div>
            </div>
            <div id="lens" className="lens"></div>
            <button id="flipBtn">Flip</button>
          </div>

          <div className="ckeck">

            <FontAwesomeIcon icon={faThumbsUp} style={{ color: 'white' }} /><span>{item.No_of_Likes || 0}</span>
            <FontAwesomeIcon icon={faThumbsDown} style={{ color: 'white' }} /><span>{item.No_of_Disikes || 0}</span>
            <FontAwesomeIcon icon={faShare} style={{ color: 'white' }} /><span>share</span>
          </div>
          <div className="bandca">
            <button onClick={async () => { setShowCoupon(true); loadCoupons() }} >Buy
              <FontAwesomeIcon icon={faIndianRupeeSign} style={{ color: 'yellow' }} />
            </button>
            <button>Add to cart
              <FontAwesomeIcon icon={faCartShopping} style={{ color: 'white' }} />
              <i className="fa-solid fa-cart-shopping fa-fade"></i>
            </button>
          </div>
          <div className="charc">
            <div className="repre">
              <div className="innerbox">
                {item.Characters && item.Characters.map((char, i) => (
                  <div className="characterinfo" key={i}>
                    <img src={char.Imageurl} alt={char.Name} />
                    <div className="name">{char.Name}</div>
                    <span className="role">{char.Role}</span>
                  </div>
                ))}

              </div>
            </div>
          </div>
          <div className="signchar">
            <div className="roleinfo">
              <span>
                <div className="Prota">
                  <div className="sign">P</div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Protagonist
                </div>
                <div className="support">
                  <div className="signo">S</div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Supporting Characters
                </div>
                <div className="anta">
                  <div className="signt">A</div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Antagonists
                </div>
              </span>
              <span>
                <div className="foil">
                  <div className="signth">F</div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Foil Characters
                </div>
                <div className="minor">
                  <div className="signfo">M</div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Minor Characters
                </div>
                <div className="lovei">
                  <div className="signfi">L</div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Love Interests
                </div>
              </span>
            </div>
          </div>
          <div className="report"><i className="fa-solid fa-triangle-exclamation" style={{ color: "#cd1818" }}></i><a
            href="">&nbsp;Report an issue here</a></div>
          <div className="suggest">Do not forget to suggest in suggestion box</div>
        </div>

        <div id="result" className="result">
          <div className="about">
            <div className="name">{item.Title}&nbsp;-
              <span>&nbsp;Paperback</span>
            </div>
            <div className="written">written by {item.Author}</div>
            <div className="flxm"><span>Overall Rated-&nbsp;<span>4.5</span><i className="fa-solid fa-star"
              style={{ color: "rgb(255, 212, 59)" }}></i><i className="fa-solid fa-star" style={{ color: "#FFD43B" }}></i><i
                className="fa-solid fa-star" style={{ color: "rgb(255, 212, 59)" }}></i><i className="fa-solid fa-star"
                  style={{ color: "#FFD43B" }}></i><i className="fa-solid fa-star-half" style={{ color: "#FFD43B" }}></i></span>
              <span>{item.Reviewers_detail?.length || 0}  <span>Ratings</span></span>
              <span>{item.No_of_Likes || 0}<span>Likes</span></span>
              <span>{item.No_of_Disikes || 0}<span>Dislikes</span></span>
            </div>
            <div className="story"> {item.Aboutmanga && item.Aboutmanga.length > 0
              ? item.Aboutmanga.join(' ')
              : 'No description available.'}</div>
            <div className="Editions">
              <div className="priceslot">
                <div className="twomain">
                  <div className="Kindle">
                    <h5>Readcaose Edition</h5>
                    <div className="price">₹{item.Originalvalue?.toFixed(2) || '0.00'}</div>
                    <div className="vstatus">{item.Instock ? 'Available now' : 'Out of stock'}</div>
                  </div>

                  <div className="PaperBack">
                    <h5>PaperBack</h5>
                    <div className="price">₹{item.Originalvalue?.toFixed(2) || '0.00'}</div>
                  </div>
                </div>
                <div className="upperprice">
                  <div className="pricemainslot">
                    <div className="showpri"> <span className="disc">{discountPercent}%&nbsp;</span>₹{item.Originalvalue || 0}</div>
                    <div className="mrp"> <span>MRP&nbsp;-</span>&nbsp;
                      <span className="realprice">₹{item.previousvalue || item.Originalvalue}</span>
                    </div>
                    <div className="tax">Inclusive of all taxes</div>
                    <select name="quant" id="onetohun" className="quant"></select>
                  </div>
                  <span>
                    <div className="date">Same Day Fast Delivery -</div>
                    <div className="current">{new Date().toLocaleDateString()}</div>
                  </span>
                  <div className="deliver">
                    <div className="date">FREE delivery deliver on -</div>
                    <div className="seccurrent"></div>
                    {new Date(Date.now() + 2 * 24 * 60 * 60 * 1000).toLocaleDateString()}
                  </div>
                </div>

              </div>
              <div className="offers">
                <div className="avas">Available Offers</div>
                <table>
                  <tbody>
                    <tr>
                      <td>
                        Cashback:
                      </td>
                      <td>10-15% cashback by payment through canara-credit card.Not applicable on EMI orders </td>
                    </tr>
                    <tr>
                      <td>Combo offer</td>
                      <td>{item.Currentoffer}<a href="">see
                        here...</a></td>
                    </tr>
                    <tr>
                      <td>
                        Bank offer:
                      </td>
                      <td>Pay using Canara Credit Card EMI option and get ₹1,000 cashback + 0% interest EMI for 6 months on
                        orders above ₹20,000.</td>
                    </tr>
                  </tbody>
                </table>

              </div>
            </div>

            <div className="info">
              <div className="genre">
                <img src="/2canva.png" alt="" width="50px" height="50px" />
                {item.Genres?.join(', ') || 'N/A'}
              </div>
              <div className="length">
                <img src="/5canva.png" alt="" width="50px" height="50px" />
                {item.Volume?.[0]?.No_ofpages || 'N/A'} pages
              </div>
              <div className="publisher">
                <img src="/6canva.png" alt="" width="50px" height="50px" />
                {item.Publishers?.[0] || 'N/A'}
              </div>
              <div className="language">
                <img src="/3canva.png" alt="" width="50px" height="50px" />
                {item.Language || 'English'}
              </div>
              <div className="Available">
                <img src="/4canva.png" alt="" width="50px" height="50px" />
                <select id="mangaGenre" name="LanGenre">
                  <option value={item.Language}>{item.Language}</option>
                </select>
              </div>
              <div className="imprint">
                <img src="/1canva.png" alt="" width="50px" height="50px" />
                {item.Publishinghouses?.[0] || 'N/A'}
              </div>
              <div className="see">
                <a href="#">See more detail...</a>
              </div>
            </div>

            <div className="policies">
              <div className="return">
                <img src="/10canva.png" alt="" width="50px" height="50px" />
                30day return/refund
              </div>
              <div className="free">
                <img src="/7canva.png" alt="" width="50px" height="50px" />
                Free Delivery
              </div>
              <div className="secure">
                <img src="/9canva.png" alt="" width="50px" height="50px" />
                Secure Payment
              </div>
              <div className="cash">
                <img src="/8canva.png" alt="" width="50px" height="50px" />
                Cash-on-delivery
              </div>
            </div>
          </div>
          <div id="zoomContainer" className="zoom-container"></div>
        </div>
      </div>

      {showCoupon && (
        <>
          <div className="overlay" onClick={() => setShowCoupon(false)}></div>

          <div className="paybox">
            <div className="headingp">
              <span style={{ color: "white", fontSize: "24px" }}>
                <FontAwesomeIcon icon={faTag} style={{ color: "yellow" }} />
                Apply Voucher
              </span>

              <button
                className='payclose'
                onClick={() => setShowCoupon(false)}
              >
                ✕
              </button>
            </div>

            <div className="availablev">
              <p>Available Voucher:</p>

              <div className="choosev">
                {
                  availablecoupon.length === 0
                    ? <p>Not Available</p>
                    : availablecoupon.map((a, i) => (
                      <button
                        key={i}
                        className='choosevoucher'
                        onClick={() => {
                        //  setApplied(a.vouchget)
                          setCouponCode(a.vouchget)
                        }}
                      >
                        {a.vouchget} (₹{a.availablediscount} OFF)
                      </button>
                    ))
                }
              </div>
            </div>

            <input type="text" className="vouchinput" placeholder='ENTER CODE' maxLength={12} value={couponCode}
              onChange={(e) => setCouponCode(e.target.value)} style={{ width: "90%", height: "150px" }} />
            <button style={{ color: "white", backgroundColor: "blue", width: "90%" } }  onClick={applyCoupon}>Apply</button>
            <div className="valueline" style={{}}></div>
            <div className="thennowpay" style={{ marginTop: "10px" }}>
              <span><h4 style={{ color: "white" }}>Original Price:</h4>
                <p style={{ color: "white", textDecoration: "line-through" }}> ₹{item.Originalvalue}</p></span>
              <span><h4 style={{ color: "white" }}>New Price:</h4>
                <p style={{ color: "white" }}>₹{priceDetails ? priceDetails.finalAmount : item.Originalvalue}</p></span>
              {
                priceDetails?.discount > 0 && (
                  <p style={{ color: "yellow" }}>
                    You saved ₹{priceDetails.discount}
                  </p>
                )
              }
            </div>
            <button className='payBtn' onClick={Paynow}>
              Proceed to Pay →
            </button>
          </div>
        </>
      )}

      <h2>Deep Insight</h2>
      <div className="deepinsight">
        <div className="aboutpro">
          <div className="di">
            BookSize :- <span>{item.Size?.join(' x ') || 'N/A'} cm</span>
            <div className="age">Age Status :-<span>{item.Status_age_wise || 'N/A'}</span></div>
            <div className="Type">Type:- <span>{rawItem.Genre || 'N/A'}</span></div>

            <div className="weight">Net Weight :-<span>N/A</span></div>
            <div className="publishers">publishers :-<span>{item.Publishers?.[0] || 'N/A'}</span></div>
            <div className="isbn">ISBN:- <span>N/A</span></div>
            <div className="lan">Language:- <span>{item.Language || 'N/A'}</span></div>
            <div className="itemtype">Item-type:- <span>{rawItem.ItemType || 'N/A'}</span></div>
            <div className="originated">Originated-in :- <span>N/A</span></div>
            <div className="award">
              <h5>Awards/Achievements</h5>
              <table>
                <tbody>
                  <tr>
                    <td>Japan Expo Awards</td>
                    <td>Daruma for Best Manga</td>
                    <td>2023</td>
                  </tr>
                  <tr>
                    <td>Harvey Award</td>
                    <td>Best Manga</td>
                    <td>2022</td>
                  </tr>
                  <tr>
                    <td>Eisner Award</td>
                    <td>Best U.S. Edition of International Material—Asia </td>
                    <td>2022</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="author">
          <h4>Author info </h4>
          <div className="authorname">
            <img src="https://cdn.kemik.gt/2024/04/TatsukiFujimoto-1200x1200-1.jpg" alt="" width="100px" height="100px" />
            {item.Author}  <a href="#"><span>Follow me</span></a>
          </div>
        </div>
      </div>
      <h3 className="another">Another volumes available</h3>
      <div className="overallvol">
        <div className="anvol" id="anvol">
        </div>
      </div>

      <h3>Product related to manga</h3>
      <div className="product">
        <div className="showrel">
          <div className="showrelall">
            <div className="onerel"><img
              src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTsi0AoB65WBKLPewLWn6cGlfNt4On_XqJyVuR2pt7UBQjwTMwxfwuMRkPM8jP2rnPfYgZV9U3jVsr-zVgjacZeHrsedFHDtNJKU39mBEatNgQsMA02p7Tg"
              loading="lazy" />
              <div className="itemname">Chainsaw Man Power DX Bonus Version</div>
              <div className="prices"> ₹1,30,000</div>
            </div>
            <div className="onerel"><img
              src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRM7UwCFASWpaTu8E6uVn8gmAbdhErCtF0G6-hqjpINvLmRtasZGmI4XkEMnoYAJ2SE2FuvgJ_jM59XmbibAePFTUofDsDe12TyUQ3N2_OVjvUlsDCpHLg-"
              alt="" />
              <div className="itemname">Chainsaw Man Anime Aesthetic Phone Case Cover by Culltique</div><div className="prices">₹500</div>
            </div>
            <div className="onerel"><img
              src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcT9NwrLMC0A2jJ-JhZf8oZBbZhYHagWVz6VHiE-f7UuK3wwfnKZGnq9CIpemgwnJMNldmklKXfXOAIki17MBeyqKQL8U8eskRUIHqJQ30O7D3NJLLd6ILNH"
              alt="" />
              <div className="itemname">Ronin Retail Chainsaw Man Anime Graphic T-Shirt</div><div className="prices">₹500</div>
            </div>
            <div className="onerel"><img
              src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRB9pGeBTi81YlelR5KhOHAHwnyi0oz-ytTiBwLmU01GQ0LywfOwt-SZwJaQLKGVGpwpvwMzJP3aTwLKDJdnSG6Q4opSpkl"
              alt="" />
              <div className="itemname">Chainsaw Man Printed Keychain</div><div className="prices">₹140</div>
            </div>
            <div className="onerel"><img
              src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcT1ltsYax6ZsFwiWw2OOfJOPg4lKErX2nIoLjy1zI6FEX_LdwJ4nwDKf3LMYLWEM0XmwRzUst39MU4-OyQz8z1QYS2WR7H_238MRw2EOMuCVVGJ3PqaP5mJUw"
              alt="" />
              <div className="itemname">Unisex Chainsaw Man Anime Hoodie</div><div className="prices">₹990</div>
            </div>
            <div className="onerel"><img
              src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRewiBHHTWKu8gSzJCw0bXo98kNaQzuoHhLH2JTagjvUyf5vX3b9_y5PnvskpQlCy5YZ6WEFC4vA8j1l8PFZglJibCEMGctKOP98xM8Fx0-nsLNOaaMgTLSyQ"
              alt="" />
              <div className="itemname">Chainsaw Man Laptop Self Adhesive Vinyl Skin Full Panel For 15.6 Inch </div><div className="prices">₹230</div>
            </div>
            <div className="onerel"><img src="https://m.media-amazon.com/images/I/51YGbXA4SiL._UF1000,1000_QL80_.jpg" alt="" />
              <div className="itemname">Store2508 Chainsaw Man Action Figures Set, Pack of 6</div><div className="prices">₹800</div>
            </div>
            <div className="onerel">
              <img
                src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTm9UPNDVhnrCuRasRzKtTd2-xDQ3ghBaUVM0ji_yDA_zwYHLvA4tXS0Cq_G98inRbGbXRB2Ut4d2hBnFDdcjs3ga3xjhC6DqBzUEHfhr6a5WQ21cDl39__Qg"
                alt="" />
              <div className="itemname">Denji Chainsaw Man Women's Oversized T-shirt</div>
              <div className="prices">₹529</div>
            </div>
            <div className="onerel"><img
              src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSyehNTkrvz5bxMZaNSCDTz8ZQKIUWCfWEk23m_8MAQ1MItt4qZIjo8x2xnZc1ZRVid0qatHkebfQ25PFNw2YkRGiWDRNxXWxOJibf2dl5DoMTMtF4wAD6wQug"
              alt="" />
              <div className="itemname">Chainsaw Man Metal Poster </div><div className="prices">₹2310</div>
            </div>
            <div className="onerel"><img
              src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRV8qJuJJNEK8oFCEX7cq1rO4SHX8m6HwDG7Snj9S6Mm4nK1J7O2tr7vZBs8b6FGsMpAwBcpBL7Pg1pD_rV69Mxze2bVtI90ykQfEYwVVmMNEi5V6Ol7rl8"
              alt="" />
              <div className="itemname">Chainsaw Men's Sweatshirt</div><div className="prices">₹799</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default bar