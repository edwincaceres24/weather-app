import React,{Component} from "react";
import WeatherCard from './weathercard.js';
import {API_KEY} from "../API/api.js";



class WeatherCardsContainer extends Component{
    constructor(props){
        super(props)
        this.state= { 
            loading:true,
            data: {
                id: "",
                city: "",
                country: "",
                degree: "",
                degreeIcon:"",
                degreeGrade: "",
                description: ""

            },
            error:null
        }
    }
    componentDidMount() {
        this.fetchData(this.props.city)
        console.log("Did Mount")
        
    }
    componentDidUpdate(prevProps,prevState){
        
    
        if(prevProps.city !==this.props.city){
            console.log("Calling API Again")
            this.fetchData(this.props.city)
            
        }
    }
 
    fetchData = async (city)=>{
        const mainAPI = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${API_KEY}`;
        try {
            await fetch(mainAPI)
            .then(response => response.json())
            .then(data => {
                 this.setState({
                    loading: false,
                    data:{
                        id: data.id,
                        city: data.name,
                        country: data.sys.country,
                        degreeIcon: data.weather[0].icon,
                        degreeGrade:"°C",
                        degree: data.main.temp,
                        description: data.weather[0].description
                    },
                    error:null
                })
            }) 
        } 
        catch(err){
            console.error(err.message)
            this.setState({
                loading: false, error:err.message
            })
        } 
           
    }
render(){
    // if(this.state.loading===true){
    //     return "Loading"
    // }
    // if(this.state.error){
    //     return("Error")
    // }
    // else{
    //     return "Mundo " + this.props.city
    // }
    return(
        <WeatherCard 
            city={this.state.data.city}
            country={this.state.data.country}
            degree={this.state.data.degree}
            degreeGrade={this.state.data.degreeGrade}
            degreeIcon={this.state.data.degreeIcon}
            description={this.state.data.description}
        />
    )
}
}


export default WeatherCardsContainer;


