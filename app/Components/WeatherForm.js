import React, {Component} from 'react';
import getTemp from 'getTemp';
class WeatherForm extends React.Component{
  handleSubmit(e){
    e.preventDefault();

    //Set loading text
    var {parent} = this.props;
    parent.state.isLoading = true;
    parent.setState(parent.state);

    getTemp(this.refs.cityName.value)
    .then(response => {
      //Set result
      parent.state.isLoading = false;
      parent.state.city = this.refs.cityName.value;
      parent.state.temp = response.data.main.temp;
      this.refs.cityName.value = '';
      parent.setState(parent.state);
    })
    .catch(err => console.log(err));
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
