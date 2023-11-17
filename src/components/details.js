import React from 'react'
import { Link, useParams } from 'react-router-dom';
import data from '../data.json';

function Details() {

    const param = useParams();
    const id = param.id;

    const details = data.find((item)=>item.id==id);

  return (
    
    <div style={{color:"black", textAlign:"center", height:"100vh", backgroundColor:"black"}}>

        <h1><span style={{color:"yellow"}}>Details Page With Id:</span> <span style={{color:"white"}}>{id}</span></h1>
        <img style={{marginTop:"20px", borderRadius:"10px"}} src="https://picsum.photos/200?random=${post.id" alt={details.title} />
        <h3><span style={{color:"yellow"}}>User Id:</span> <span style={{color:"white"}}>{details.userId}</span></h3>
        <h3><span style={{color:"yellow"}}>Title:</span> <span style={{color:"white"}}>{details.title}</span></h3>
        <h3><span style={{color:"yellow"}}>Body:</span> <span style={{color:"white"}}>{details.body}</span></h3><br></br>
        <Link to="/">
        <button style={{color:"#ffffff", backgroundColor:"red", fontWeight:"bold"}} className='btn btn'>Go Back</button>
        </Link>
    </div>
    
    
  )
}

export default Details;
