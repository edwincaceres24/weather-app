import React,{Component} from 'react';
import './styles/pages.css';
import WeatherCardForecast from '../components/weathercard_forecastcontainer.js';
import Button from '../components/button.js';

class ForeCastPage extends Component{
  constructor(props){
    super(props)
    this.state={
      data:false,
      location:null
    }
  }
  handleClick = (target)=>{
  let selectedCity=document.getElementById('input-for-forecastButton');
        target.preventDefault()
        this.setState({
            location: selectedCity.value,
            data:true
        })
        return console.log(`Selected city is ${selectedCity.value}`)
        /*this.setState({
            location:fetchingGoogleAPI(selectedCity)
        })*/
    }
  render(){
    return(
      <main>
        <h1 className="mt-5 text-center">Forecast Time</h1>
        <div className="container text-center">
          <p>Write down the city you in which you would like to know the time</p>
        </div>
        <section className="container">
            <form className="d-flex flex-column flex-md-row justify-content-center align-items-center">
                <input className="main--info-button mb-3 mb-md-0 me-md-3" id="input-for-forecastButton" placeholder="@My city"></input>
                <Button clickevent={this.handleClick}/>
            </form>
          {this.state.data===true&&<WeatherCardForecast address={this.state.location}/>}
        </ section>

    </main>
  )}
}

export default ForeCastPage;
