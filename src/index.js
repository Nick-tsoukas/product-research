import React from 'react';
import { render } from 'react-dom';
import './main.css';

const App = () => {
  return (
    <div>
      <h1>Our Application Is Awake</h1>
      <p>....</p>
    </div>
  );
}

render(<App />, document.getElementById('app'));
