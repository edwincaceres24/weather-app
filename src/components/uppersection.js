import React,{Component} from "react";
import './styles/uppersection.css';
import WeatherCard from "./weathercard.js";
import {API_KEY} from "../API/api.js";
// import API_KEY from "../API/api.js";


class UpperSection extends Component {
    constructor(props){
        super(props)
        this.state= { 
            id: "",
            city: "",
            country: "",
            degree: "",
            degreeGrade: "",
            description: ""
        }
        // const citySelected = null;
    }
    fetchData = async (city)=>{
        const mainAPI = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${API_KEY}`;
        try {
            await fetch(mainAPI)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    id: data.id,
                    city: data.name,
                    country: data.sys.country,
                    degreeGrade:"°C",
                    degree: data.main.temp,
                    description: data.weather[0].description,
                })
            }) 
        } 
        catch(err){
            console.error(err.message)
        } 
           
    }
    // componentDidMount just work for default API Call
    // componentDidMount() {
    //     // const city = document.getElementById("city--selected");
    //             console.log("componentDidMount")


    //     }
  
    handleClick = (target)=>{
        target.preventDefault();
        const city = document.getElementById("city--selected");
        // this.citySelected = city
        this.fetchData(city.value)

    }
    render() {
        return(<>
        <section className="container">
            <div className="d-flex align-items-center flex-column mt-4">
            <h1 className="main-title">Simple Weather App</h1>
            <p >Write down the city you like to know it current time</p>
            <form className="d-flex flex-row ">
                <input  className="main--info-button" placeholder="Search for a city" id="city--selected" />
                <button className="btn btn-danger ms-4" onClick={this.handleClick}>Submit</button>
            </form>
        </div>
        </section>
        <section id="block--container" className="container"> 
            {/* {this.state.data.map(card=>
            )
        } */}
                {this.state&&<WeatherCard 
                    key={this.state.id} 
                    city={this.state.city}
                    country={this.state.country} 
                    degree={this.state.degree} 
                    degreeGrade={this.state.degreeGrade} 
                    description={this.state.description} 
                />}
        </section>
        </>
        )}

}

export default UpperSection;