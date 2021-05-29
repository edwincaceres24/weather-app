import React,{Component} from "react";
import './styles/uppersection.css';
import WeatherCardsContainer from "./weathercardscontainer.js";


class UpperSection extends Component {
    constructor(props){
        super(props)
        this.state={
            city:false
        }
    }
    handleClick = (target)=>{
        target.preventDefault();
        const city = document.getElementById("city--selected");
        this.setState({
            city: city.value
        })
    }
  
    render() {
        return(<>
        <section className="container">
            <div className="d-flex align-items-center flex-column">
            <h1 className="main-title mt-4">Simple Weather App</h1>
            <p >Write down the city you like to know it current time</p>
            <form className="d-flex flex-row ">
                <input  className="main--info-button" placeholder="Search for a city" id="city--selected" />
                <button className="btn btn-danger ms-4" onClick={this.handleClick}>Submit</button>
            </form>
        </div>
        </section>
        <section id="block--container" className="container"> 
            {this.state.city&&<WeatherCardsContainer city={this.state.city}/>}
             
        </section>
        </>
        )}

}

export default UpperSection;