import React, {Component} from 'react';
import Nav from 'Nav';
class Main extends React.Component{
  render(){
    return (
      <div>
        <Nav/>
        Main Component
        {this.props.children}
      </div>
    );
  }
}

module.exports = Main;
