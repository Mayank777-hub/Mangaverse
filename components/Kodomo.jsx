
import React , { useState,useEffect,useMemo } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft,faAngleRight } from '@fortawesome/free-solid-svg-icons'
import Loader from './Loader'
//import Navbar from './Navbar'
import "./kodomo.css"

const Kodomo = () => {
const api = "http://localhost:3900/api/products";
//const [manga,setManga] = useState([])
const [loading,setLoading] = useState(false)
const [search,setSearch] = useState([])
const [page,setpages]=useState(1)
const [pagination,setpage] =useState({})  // actually i not add pages for every anime so i have to declare new state here
const {cat} = useParams()
    useEffect(() => {
      const fetchdata = async()=>{
        setLoading(true)
        try {
            const res = await fetch(`${api}/test?Genre=${cat}&page=${page}`)
            const data = await res.json()
            setpage(data.pagination ||{});
             const mapanime = (data.allmangadata || []).map(item => ({
         _id: item._id,
          title: item.Type?.[0]?.Title,
          image: item.Type?.[0]?.Animeurl,
          price: item.Type?.[0]?.Originalvalue
             }))
             setSearch(mapanime);
        } catch (error) {
            console.log(error)
        }
        setLoading(false);
      };
    fetchdata()
     
    }, [cat,page])
    
    const reusebar = useNavigate();
    const move = (t)=>{
      reusebar(`/search?query=${t}`);
    }
  return (
    <>
  <div className='searchcontainer'>
    {loading && <Loader/>}
    {!loading && search.length === 0 && <p style={{color:"yellow"}}>Not Found</p>}
    {!loading && search.map(search => (  // here inside search is different from map search not be confude
     <div className="searchboxes" key={search._id} onClick={()=>move(search.title)}>
      <img className ="catbox" src={search.image}  style={{width:"100%",height: "260px",
                objectFit: "contain"}} />
                <h3>{search.title}</h3>
            <p>₹ {search.price}</p>
     </div>
     ))}
  </div>
  <div className="page">
    <button onClick={()=>setpages(page-1)}>
<FontAwesomeIcon icon={faAngleLeft} />
    </button>
    {pagination.currentPage}
    <button onClick={()=>setpages(page+1)}>
      <FontAwesomeIcon icon={faAngleRight} />
    </button>
  </div>
  </>
  )
}

export default Kodomo;
