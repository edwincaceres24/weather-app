import React, {Component} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import LayoutComponent from '../components/layout.js';
import HomePage from '../pages/home.js';
import UpperSection from './uppersection';
import ForecastPage from '../pages/forecast_page.js'

class App extends Component{
    render(){
        return(
        <BrowserRouter>
            <LayoutComponent>
            <Switch>
                <Route exact path="/" component={HomePage}/>
                <Route exact path="/city-search" component={UpperSection}/>
                <Route exact path="/daily-forecast" component={ForecastPage}/>
            </Switch> 
            </LayoutComponent>
        </BrowserRouter>
        )}
}

export default App;
