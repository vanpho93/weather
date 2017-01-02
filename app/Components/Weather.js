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
      <div className="small-10 medium-6 large-4 columns small-centered">
        <h1 className="page-title text-center">Get Weather</h1>
        <WeatherForm parent={this}/>
        {xhtml2}
      </div>
    );
  }
}

module.exports = Weather;
