import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Clock from './clock.js';
import Toggle from './toggle.js';
import App from './App';
import * as serviceWorker from './serviceWorker';



ReactDOM.render(
    [
      <h1> From index.js </h1>,
      <h3> From clock.js </h3>,
      <Clock />, 
      <h3> From toggle.js </h3>,
      <Toggle />
    ],
  document.getElementById('root')
);
