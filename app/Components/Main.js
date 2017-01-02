import React, {Component} from 'react';
import Nav from 'Nav';
class Main extends React.Component{
  render(){
    return (
      <div>
        <Nav/>
        <div className="row">
          {this.props.children}
        </div>
      </div>
    );
  }
}

module.exports = Main;
