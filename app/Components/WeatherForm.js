import React, {Component} from 'react';
import getTemp from 'getTemp';
class WeatherForm extends React.Component{
  handleSubmit(e){
    e.preventDefault();
    var {parent} = this.props;
    parent.state.city = this.refs.cityName.value;

    getTemp(this.refs.cityName.value)
    .then(response => console.log(response.data.main.temp))
    .catch(err => console.log(err));

    this.refs.cityName.value = '';
    parent.setState(parent.state);
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
