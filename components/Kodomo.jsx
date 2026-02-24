
import { React,useState,useEffect,useMemo } from 'react'
import { useParams } from 'react-router-dom'
import Loader from './Loader'
//import Navbar from './Navbar'
import "./kodomo.css"

const Kodomo = () => {
const api = "http://localhost:3900/api/products";
//const [manga,setManga] = useState([])
const [loading,setLoading] = useState(false)
const [search,setSearch] = useState([])
const {cat} = useParams()
    useEffect(() => {
      const fetchdata = async()=>{
        setLoading(true)
        try {
            const res = await fetch(`${api}/test?Genre=${cat}`)
            const data = await res.json()
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
     
    }, [cat])
    
  return (
  <div className='searchcontainer'>
    {loading && <Loader/>}
    {!loading && search.length === 0 && <p>Not Found</p>}
    {!loading && search.map(search => (  // here inside search is different from map search not be confude
     <div className="searchboxes" key={search._id}>
      <img className ="catbox" src={search.image}  style={{width:"100%",height: "260px",
                objectFit: "contain"}} />
                <h3>{search.title}</h3>
            <p>₹ {search.price}</p>
     </div>
     ))}
  </div>
  )
}

export default Kodomo;
