import React, {Component} from 'react';

class WeatherForm extends React.Component{
  handleSubmit(e){
    e.preventDefault();
    alert(this.refs.cityName.value);
  }
  render(){
    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input type="text" placeholder="Enter your city name" ref="cityName"/>
          <br/><br/>
          <button type="submit">Get Weather</button>
        </form>
      </div>
    );
  }
}

module.exports = WeatherForm;
