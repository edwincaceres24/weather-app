import React, {Component} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import HomePage from '../pages/home.js';
import UpperSection from './uppersection'

class App extends Component{
    render(){
        return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={HomePage}/>
                <Route exact path="/city-search" component={UpperSection}/>
            </Switch>
        </BrowserRouter>
        )}
}

export default App;
