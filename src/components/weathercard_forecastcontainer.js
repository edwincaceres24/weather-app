import React, {Component} from 'react';
import {API_KEY} from '../API/api.js';
import Button from './button.js';
import WeatherCard from './weathercard.js';

class WeatherCardForecast extends Component{
    constructor(props){
        super(props)
        console.log(props)
        this.state={
            loading:true,
            data:{},
            error:null
        }
    }

    
    fetchForecastData = async (API)=>{
        const mainAPI = `https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=current,hourly,minutely&appid=${API}`;
        try {
            await fetch(mainAPI)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                this.setState({
                        loading:false,
                        data: {
                            time: data.daily,
                            timezone: data.timezone

                        },
                        error:null
                    }
                )
                return data.daily;
            })
            .then(data=>data.map(e=>{
                console.log(e)
                console.log(data.indexOf(e))
                }
            ))
        } 
        catch(err){
            console.error(err.message)
            this.setState({
                loading:false,
                error: err.message
            })
        }
    }
    componentDidMount(){
        this.fetchForecastData(API_KEY)
        console.log(this.state.data)
    }
render(){
    if(this.state.loading===true){
        return "Loading..."
    }
    if(this.state.error){
        return "Error"
    }
    if(Boolean(this.state.data.time)){
    return(
        <section className="container-fluid">
            <div className="d-flex flex-column align-items-center">
            <p>This is the Weather for your City</p>
            <Button />
                </div>
            <div className="d-grid">
                {this.state.data.time.map(card=><WeatherCard 
                    city={`Day ${this.state.data.time.indexOf(card)+1}`} 
                    country="America"
                    degree={card.temp.day}
                    degreeGrade="C"
                    degreeIcon={card.weather[0].icon}
                    description={card.weather[0].description}
                    />
                )}
            </div>
            </ section>
        )
    }
    }
}

export default WeatherCardForecast;
