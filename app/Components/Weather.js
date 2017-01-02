import React, {Component} from 'react';
import WeatherForm from 'WeatherForm';
import WeatherMessage from 'WeatherMessage';

class Weather extends React.Component{
  constructor(props){
    super(props);
    this.state = {city: 'Hanoi', temp: 15}
  }
  render(){
    var {city, temp} = this.state;
    return (
      <div>
        <h1>Get Weather</h1>
        <WeatherForm parent={this}/>
        <WeatherMessage city={city} temp={temp}/>
      </div>
    );
  }
}

module.exports = Weather;
