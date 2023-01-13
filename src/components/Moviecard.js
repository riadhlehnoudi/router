import React from 'react';
import Card from 'react-bootstrap/Card';
import ReactStars from 'react-rating-stars-component';
import { Link } from 'react-router-dom';


function Moviecard({movie}) {
  console.log(movie)
  return (
    <Link to={'/trailer/§{movie.id}'}>
      <Card style={{ width: '18rem' ,margin:'20px' }} style={{textDecoration:"none", color:"black"}}>
    <Card.Img variant="top" src={movie.posterurl} />
    <Card.Body>
      <Card.Title>{movie.name}</Card.Title>
      <Card.Text> {movie.description}</Card.Text>
     <div>
       <ReactStars count={5} size={24} activeColor="#ffd700" edit={false} value={movie.rating} />
  </div>
    
  </Card.Body>
  </Card>
  </Link>
       
  );
}

export default Moviecard;