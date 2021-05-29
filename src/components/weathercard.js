import React,{Component} from 'react';
import './styles/weathercard.css';


class WeatherCard extends Component {

    render(){
        return(
            <article className="weather--card-container">
                <div className="weather--card-info-container">
                <h4>{this.props.city}</h4>
                <span className="weather--card-badge ms-2">{this.props.country}</span>
                </div>
                <h2 className="weather--card-degree">{this.props.degree}</h2> 
                <span>{this.props.degreeGrade}</span>
                <h3>{this.props.description}</h3>
            </article>
        )
    }
}

export default WeatherCard;