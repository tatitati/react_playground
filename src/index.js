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

import { Stage, Layer, Rect, Circle } from 'react-konva';

export const MyGraph = () => {
  return (
    // Stage - is a div wrapper
    // Layer - is an actual 2d canvas element, so you can have several layers inside the stage
    // Rect and Circle are not DOM elements. They are 2d shapes on canvas
    <Stage width={window.innerWidth} height={window.innerHeight}>
      <Layer>
        <Rect width={50} height={50} fill="red" />
        <Circle x={200} y={200} stroke="black" radius={50} />
      </Layer>
    </Stage>
  );
}

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
      <MyGraph/>
    ],
  document.getElementById('root')
);



