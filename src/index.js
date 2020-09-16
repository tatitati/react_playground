import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Clock from './myfiles/clock.js';
import Toggle from './myfiles/toggle.js';
import LoginControl from './myfiles/LoginControl.js';
import Page from './myfiles/WarningBanner.js';
import App from './App';
import * as serviceWorker from './serviceWorker';

// "yarn start" render this file

ReactDOM.render(
    [
      <h1> From index.js </h1>,
          <h3>    From clock.js </h3>,
                <Clock />, 
          <h3>    From toggle.js </h3>,
                <Toggle />,
          <h3>    From LoginControl.js </h3>,
                <LoginControl />,         
          <h3>    From WarningBanner.js </h3>,                
                <Page />,
    ],
  document.getElementById('root')
);



