import React, {Component} from 'react';
import WeatherForm from 'WeatherForm';
import WeatherMessage from 'WeatherMessage';

class Weather extends React.Component{
  constructor(props){
    super(props);
    this.state = {city: undefined, temp: undefined, isLoading: false}
  }
  render(){
    var {city, temp, isLoading} = this.state;
    var xhtml = city?<WeatherMessage city={city} temp={temp}/>:null
    var xhtml2 = isLoading?<h3>Loading...</h3>:xhtml;
    return (
      <div>
        <h1>Get Weather</h1>
        <WeatherForm parent={this}/>
        {xhtml2}
      </div>
    );
  }
}

module.exports = Weather;
