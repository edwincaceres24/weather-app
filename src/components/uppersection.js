import React,{Component} from "react";
import './styles/uppersection.css';
import WeatherCardsContainer from "./weathercardscontainer.js";
import Button from './button.js'

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
            <p >Here you can search a city</p>
            <form className="d-flex flex-column flex-md-row ">
                <input  className="main--info-button mb-3 mb-md-0 me-4" placeholder="Search for a city" id="city--selected" />
                <Button clickevent={this.handleClick} />
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
