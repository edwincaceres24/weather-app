import React from 'react';
import WeatherLogo from './images/cloudy-day.svg';
import {Link} from 'react-router-dom';
import './styles/navbar.css';

function NavBar(){
return(
    <header className="mt-3">
        <nav>
            <div className="container d-flex align-items-center justify-content-center justify-content-sm-start">
            <Link to="./">
                <picture className="me-2">
                    <img className="logo--image" alt="Weather-App" src={WeatherLogo}/>
                    </picture>
            </Link>
            <h3 className="logo--text">Weather App</h3>   
            </div>
        </nav>
    </header>
)
}


export default NavBar;
