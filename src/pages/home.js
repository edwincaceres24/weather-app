import React from 'react';
import {Link} from 'react-router-dom';
import './styles/pages.css';


function HomePage(){
  return(      
    <section className="mt-5">
      <h1 className="text-center mb-4">Please, select an option</h1>
      <div className="d-flex flex-column align-items-center btn-container">
      <Link to="./city-search">
        <span className="btn btn-success">Select single city</span>
      </Link>
      <Link to="./daily-forecast">
        <span className="btn btn-success">Watch the forecast time</span>
      </Link>
        </div>
    </section>
  )
}

export default HomePage;
