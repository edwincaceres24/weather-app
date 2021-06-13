import React, {Component} from 'react';
import {API_KEY} from '../API/api.js';
import Button from './button.js';

class WeatherCardForecast extends Component{
    constructor(props){
        super(props)
        console.log(props)
        this.state={
            data:{}
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
                        data: data
                    }
                )
            }) 
        } 
        catch(err){
            console.error(err.message)
        }
    }
    componentDidMount(){
        this.fetchForecastData(API_KEY)
        console.log(this.state.data)
    }
render(){
    return(
        <>
        <p>Weather</p>
        <Button />
        </>
        )
    }
}

export default WeatherCardForecast;
