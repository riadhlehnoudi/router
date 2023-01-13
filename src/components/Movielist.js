import React from 'react';
import Movieadd from './Movieadd';
import Moviecard from './Moviecard';

function Movielist({movies,setmovies,text, rate}) {
  console.log(movies)
  return (
    <div>
      <div className='btnadd' >
      <Movieadd movies={movies} setmovies={setmovies}/>
      </div>
    <div className='box' >
      {movies.filter((el) =>el.name.toLowerCase().includes(text.toLowerCase()) && 
      el.rating >= rate)
      .map((el)=><Moviecard movie={el}/>).reverse()}
    </div>
    </div>
  )
}

export default Movielist;