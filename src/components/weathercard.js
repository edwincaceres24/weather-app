import React,{Component} from 'react';
import './styles/weathercard.css';


class WeatherCard extends Component {

    render(){
        return(
            <article className="weather--card-container">
                <div className="d-flex flexd-row  align-items-center justify-content-center mb-4">
                <h4 className="m-0">{this.props.city}</h4>
                <span className="weather--card-badge ms-2 px-2">{this.props.country}</span>
                </div>
                <div className="weather--degree-container d-flex align-items-start justify-content-center">
                <h2 className="weather--card-degree">{this.props.degree}</h2> 
                <span className="mt-1 fs-1">{this.props.degreeGrade}</span>
                </div>
                <figure >
                    <img className="d-block my-0 mx-auto" src={`http://openweathermap.org/img/wn/${this.props.degreeIcon}@4x.png`}alt={this.props.city} />
                <figcaption>
                <h3 className="text-capitalize text-center mb-1">{this.props.description}</h3>
                </figcaption>
                </figure>
            </article>
        )
    }
}

export default WeatherCard;
