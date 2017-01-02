import React, {Component} from 'react';
import {Link, IndexLink} from 'react-router';
class Nav extends React.Component {
    render() {
        return (
          <div className="top-bar">
                <div className="top-bar-left">
                    <ul className="menu">
                      <li><Link to = "/about" activeClassName = "active" >About</Link></li>
                      <li><IndexLink to="/" activeClassName=" active ">Get Weather</IndexLink></li>
                    </ul>
                </div>
                <div className="top-bar-right">
                    <ul className="menu">
                        <li><input type="search" placeholder="Search"/></li>
                        <li>
                            <button type="button" className="button">Search</button>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

 module.exports = Nav;
