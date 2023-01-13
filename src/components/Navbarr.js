import React from 'react'
import ReactStars from 'react-rating-stars-component';
import { Link } from 'react-router-dom';





const Navbarr=({settext,setrate})=> {
  return (
    <div className='header' >
        <nav>
            <ul>
                <li><Link to="/about" style={{textDecoration:"none",color:"white" }}>About</Link></li>
                <li><Link to="/contact"style={{textDecoration:"none",color:"white" }}>Contact</Link></li>
                <li><Link to="/movie"style={{textDecoration:"none",color:"white" }}>Movies</Link></li>
                
            </ul>
        </nav>
        <div className="box2">
        <ReactStars style={{width:"100%",dislay:"flex"}} count={5} size={24} activeColor="#ffd700" onChange={(newRating)=>setrate(newRating)}/>
        <form>
            <div className='search-btn'>
                <input type='text' placeholder='enter movie name'
             onChange={(e)=>settext(e.target.value)}>
                </input>
                <button><i class="fa fa-search" aria-hidden="true"></i>
</button>

            </div>
        </form>
        <div className='container'>

        </div>
    </div></div>

  )
}

export default Navbarr;