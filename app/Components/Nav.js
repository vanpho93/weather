import React, {Component} from 'react';
import {Link, IndexLink} from 'react-router';
class Nav extends React.Component{
  render(){
    return (
      <div>
        <Link to="/about" activeClassName="active">About</Link>
        <IndexLink to="/a" activeClassName="active">Get Weather</IndexLink>
      </div>
    );
  }
}

module.exports = Nav;
