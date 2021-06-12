import React from 'react';
import {Link} from 'react-router-dom';
import './styles/pages.css';


function HomePage(){
  return(      
    <section className="mt-5">
      <h1 className="text-center mb-4">Please, choose what do you want to do</h1>
      <div className="d-flex flex-column align-items-center btn-container">
      <Link to="./city-search">
        <button class="btn btn-success">Select single city</button>
      </Link>
      <Link to="./city-search">
        <button className="btn btn-success">Select multiple city</button>
      </Link>
        </div>
    </section>
  )
}

export default HomePage;
