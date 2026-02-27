import React,{ useState }  from 'react'
import Navbar from "../components/Navbar"
import "./todo.css"
import "./App.css"
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import Infinite from '../components/Infinite';
import Sliderone from '../components/Sliderone';
import Displayone from '../components/Displayone';
import Displaytwo from '../components/Displaytwo';
import { createBrowserRouter,RouterProvider} from 'react-router-dom'
import Login from '../components/Login';
import Searchresult from  '../components/bar';
import Kodomo from '../components/Kodomo';

const Todo = ({ props,t, isActive, onClick }) => {
  return (
    <>
    <div
      className={`card ${isActive ? 'active' : ''}`}
      onClick={onClick}
    >
      <div className="todo-card">
        <img src={t.img} alt={t.Name} className="image" />
        <div className="total">
          <div className="Toname">{t.Name}</div>
          <div className="Togenre">{t.Genre}</div>
          <div className="Todesc">{t.Desc}</div>
        </div>
      </div>
    </div>
    </>
  );
};


function App() {
  const [first, setfirst] = useState(null);
const [shows, setshow] = useState([
  {
    id : "0@:2025",
    Name: "Death Note",
    Genre: "Dark , Horror, thriller, Supernatural",
    Desc: "A high-school student discovers a supernatural notebook that grants its user the ability to kill.",
    img : "https://wallpapers.com/images/featured/death-note-htruruirspqq0zot.jpg"
  },
  {
    id : "1@#2025",
    Name: "Naruto",
    Genre: "Shonen, Funny ,Action",
    Desc: "Story about a boy Naruto who want to become a Hokage",
    img : "https://resizing.flixster.com/Es3OjLQ4RIWAd5dDkpHQwPXYbvg=/fit-in/352x330/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p194893_b_h9_aa.jpg"
  },
  {
    id : "2@$2025",
    Name: "Attack on Titan",
    Genre: "Shonen",
    Desc: "The Story revolve around a boy Eren yeager who want to defeat all the Giant Monters Like Human",
     img : "https://resizing.flixster.com/z6O7C9OwQ3fLCOkx163K…GJIFWKAE8fS0ak=/v3/t/assets/p10701949_b_v9_ah.jpg"
  },
  {  id : "3@(2025",
    Name: "Berserk",
    Genre: "Seinen,Dark,Gore",
    Desc: "The story follows Guts,a tragic antihero who battles his way through a brutal and unforgiving world filled with demons.",
     img : "https://m.media-amazon.com/images/M/MV5BOTY0ZGMwZmEtNDVmMy00OWJmLWFlNjEtMGZkNTdlN2EzOWVmXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
  },
  {  id : "4@!2025",
    Name: "Dan Dadan",
    Genre: " horror, sci-fi,Comedy",
    Desc: "The story revolves around two high school students, Momo Ayase and Ken Takakura (Okarun) who later fighting yōkai and aliens with help from multiple allies.",
     img : "https://m.media-amazon.com/images/M/MV5BYWFhOWMxNTYtZThiMi00ZmQ5LTlmODktN2QwNzUyZjMyZGQzXkEyXkFqcGc@._V1_.jpg"
  }
])
   const router = createBrowserRouter([
    {path:"/",
      element:(
<>
      <Navbar />
      <div className="present">
        <div className ="welcome">
        <h1 className='nameone'>Welcome To Mangaverse</h1>
        <h3 className="intro">Discover your next manga here!!!</h3>
      </div>
      <div className="Contan">
     {shows.map((a, i) => (
  <Todo
    key={a.id}
    t={a}
      isActive={first !== null && i === first}
    onClick={() => setfirst(i)}
  />
))}
      </div>
      </div>
      <Infinite/>
      <Sidebar/>
      <Sliderone/>
      <Displayone/>
      <Displaytwo/>
      <Footer/>
    </>
      ),
    },
{path:"/Login",
  element:(
    <>
    <Navbar/>
    <Login/>
    </>
  )
},
{path:"/category/:cat",
  element:(
    <>
    <Navbar/>
    <Kodomo/>
    <Footer/>
    </>
  )
},
{
  path:"/search",
  element:(
    <>
    <Navbar/>
    <Searchresult/>
    <Footer/>
    </>
  )
}
  ])
return <RouterProvider router={router} />
}

export default App
    