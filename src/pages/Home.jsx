import React from "react";
import { useNavigate } from 'react-router-dom'
const Home = () => {
    const navigate = useNavigate()
  return (
    <>
      <div className="container position-absolute row gap-3 p-5">
        <div className="card" style={{width:"20rem"}} >
          <div className="card-body">
            <h5 className="card-title">To Do App</h5>
            <h6 className="card-subtitle mb-2 text-muted">#CRUD</h6>
            <p className="card-text">
             Teachnology: ReactJS - NodeJS - MongoDB - Redux Saga - Bootrap
            </p>
            <button type="button" className="btn btn-outline-primary" data-mdb-ripple-color="dark" onClick={() => navigate('/to-do')}>Demo</button>
          </div>
        </div>
        
        <div className="card" style={{width:"20rem"}} >
          <div className="card-body">
            <h5 className="card-title">Transfer learning image classifier</h5>
            <h6 className="card-subtitle mb-2 text-muted">Type: Machine Learning</h6>
            <p className="card-text">
             Teachnology: HTML - CSS - TensorFlow - Js
            </p>
            <button type="button" className="btn btn-outline-primary" data-mdb-ripple-color="dark" onClick={()=>{
              alert('The app is in development')
            }}>Demo</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
