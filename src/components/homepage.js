import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function HomePage() {

const url = "https://jsonplaceholder.typicode.com/posts";
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const viewData = (id) => {

    navigate('/details/'+id);
    
  }

 

  useEffect(() => {
    
    axios.get(url)
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (

    <div style={{backgroundColor:"black", overflowX:"hidden"}}>
      <div style={{marginLeft:"50px"}} className="row">
      <h1 style={{ color: "red", textAlign: "center", marginBottom: "10px", paddingTop:"10px" }}>This is home page</h1>
        
        {loading ? (
          <p>Loading...</p>
        ) : (
          data.map((item, index) => (

            
            <div style={{border: "1px solid #ffffff", marginTop:"10px", marginLeft:"25px"}} className="col-md-2" key={index}>
              <div style={{margin:"auto"}} className="card-md-3">
                
                <img style={{width:"100%", borderRadius:"10px", marginTop:"10px"}} src="https://picsum.photos/200?random=${post.id" alt={item.title} /><br></br><br></br>
                <div style={{color:"#ffffff"}} className="card-body">
                  <p className="card-title"><span style={{color:"yellow"}}>Id:</span> {item.id}</p>
                  <p className="card-title"><span style={{color:"yellow"}}>User Id:</span> {item.userId}</p>
                  <p className="card-title"><span style={{color:"yellow"}}>Title:</span> {item.title.substring(0,15)}</p> 
                  <p className="card-title"><span style={{color:"yellow"}}>Body:</span> {item.body.substring(0,20)}</p>
                  <p style={{textDecoration: "none", color: "red", fontWeight: "bold", cursor: "pointer"}} onClick={() => viewData(item.id)}>Read more</p>
                
                </div>
              </div>
            </div>
            
          ))
        )}
      </div>
    </div>
    
    
  );
}
export default HomePage;
