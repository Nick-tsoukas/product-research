import React from 'react';
import { render } from 'react-dom';
import SayHi from './components/SayHi';
import './main.css';

class App extends React.Component  {
  render(){
  return (
    <div>
    <SayHi name='Nick' petName="Jones" favNumbs={[10,99,55]} />
      <h1>Our Application Is Awake!</h1>
      <ul>
        {
          this.props.points.map((point)=> {
            return <li>{point}</li>
          })
        }
      </ul>
    </div>

  );
}
}

render(<App points={['fast loading','great docs','javascript']} />, document.getElementById('app'));
