import React from 'react';
import { render } from 'react-dom'

// could have lifecycle events
// State
// UI

const SayHi = props => (
  <header>
    <h1>Hello how are you doing</h1>
    <h3>My name is {props.name} and my dogs name is {props.petName}</h3>
    <h3>My favorit numbers are</h3>
    <ul>
    {
      props.favNumbs.map((cur) => {
        return <li>{cur}</li>
      })
    }
    </ul>
  </header>
);


export default SayHi;
