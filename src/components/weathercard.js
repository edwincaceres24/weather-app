import React,{Component} from 'react';
import './styles/weathercard.css';


class WeatherCard extends Component {

    render(){
        return(
            <article className="weather--card-container">
                <div className="d-flex flexd-row  align-items-center mb-4">
                <h4 className="m-0">{this.props.city}</h4>
                <span className="weather--card-badge ms-2 px-2">{this.props.country}</span>
                </div>
                <div className="weather--degree-container d-flex align-items-start">
                <h2 className="weather--card-degree">{this.props.degree}</h2> 
                <span className="mt-3">{this.props.degreeGrade}</span>
                </div>
                <h3 className="text-capitalize">{this.props.description}</h3>
            </article>
        )
    }
}

export default WeatherCard;