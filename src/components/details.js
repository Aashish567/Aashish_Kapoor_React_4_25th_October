import React from 'react'
import { Link, useParams } from 'react-router-dom';
import data from '../data.json';

function Details() {

    const param = useParams();
    const id = param.id;

    const details = data.find((item)=>item.id==id);

  return (
    <div style={{color:"black", textAlign:"center"}}>

        <h1>Details Page With Id: <span style={{color:"red"}}>{id}</span></h1>
        <img style={{marginTop:"20px"}} src="https://picsum.photos/200?random=${post.id" alt={details.title} />
        <h3>User Id: <span style={{color:"red"}}>{details.userId}</span></h3>
        <h3>Title: <span style={{color:"red"}}>{details.title}</span></h3>
        <h3>Body: <span style={{color:"red"}}>{details.body}</span></h3><br></br>
        <Link to="/">
        <button style={{color:"#ffffff", backgroundColor:"black", fontWeight:"bold"}} className='btn btn'>Go Back</button>
        </Link>
    </div>
  )
}

export default Details;
