import React, {Component} from 'react';

class WeatherMessage extends React.Component{
  render(){
    var {city, temp} = this.props;
    return (
      <div>
        <h3>{`${city} hiện tại ${temp} độ C`}</h3>
      </div>
    );
  }
}

module.exports = WeatherMessage;
