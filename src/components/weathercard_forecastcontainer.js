import React, {Component} from 'react';
import {API_KEY} from '../API/api.js';
import WeatherCard from './weathercard.js';
import fetchingGoogleAPI from '../API/api_google.js';

class WeatherCardForecast extends Component{
    constructor(props){
        super(props)
        console.log(props)
        this.state={
            loading:true,
            address:this.props.address,
            location:{},
            data:{},
            error:null
        }
    }
        
    fetchForecastData = async (API,lat,lon)=>{
        const mainAPI = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,hourly,minutely&units=metric&appid=${API}`;
        try {
            await fetch(mainAPI)
            .then(response => response.json())
            .then(data => {
              //  console.log(data)
                this.setState({
                        loading:false,
                        data: {
                            time: data.daily,
                            timezone: data.timezone

                        },
                        error:null
                    },
                )
                return data.daily;
            })
            .then(data=>data.map(e=>{
                //console.log(e)
                return data.indexOf(e)
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
    getLatandLon= async (data)=>{
    try{
        await this.setState(
            {
                location: {
                    lat: data,
                    lon: data,
                }
            }
        )
    }catch(err){
        console.error(err)
    }    
    
    }
    componentDidMount(){    

        fetchingGoogleAPI(this.state.address,this.getLatandLon()) //El primer parámetro sirve para obtener los datos y el segundo para colocar en el stage los valores de lat y lon
        this.fetchForecastData(API_KEY,33.44,-94.04)
        //console.log(this.state.data)
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
            <div className="d-grid">
                {this.state.data.time.map(card=><WeatherCard 
                    key={this.state.data.time.indexOf(card)}
                    city={`Day ${this.state.data.time.indexOf(card)+1}`} 
                    country="America"
                    degree={card.temp.day}
                    degreeGrade="C"
                    degreeIcon={card.weather[0].icon}
                    description={card.weather[0].description}
                    />
                )}
            </div>
        )
    }
    }
}

export default WeatherCardForecast;
