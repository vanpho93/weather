import React from 'react';
import ReactDOM from 'react-dom';
import Weather from 'Weather';
import About from 'About';
import Main from 'Main';
import {hashHistory, Router, Route, IndexRoute} from 'react-router';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/a" component={Main}>
      <IndexRoute component={Weather}/>
      <Route path="about" component={About}/>
    </Route>
  </Router>,
  document.getElementById('root')
);
