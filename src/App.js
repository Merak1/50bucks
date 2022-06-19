import logo from './logo.svg';
import './App.css';
import Panel from './Panel';
import Board from './Board';
import { useState } from 'react';

function App() {
  const [color, setColor] = useState('black')

  return (
    <div className="App">
      <div className="panel">
        <div className="panel-container">
            <h1 style={{color: color}} >The color {color} is selected</h1>
            <input onChange={e => setColor(e.target.value)} type="color" name="colorSelecter" id="colorSelecter" />
        </div>
        </div>
      <Board color={color}/>
    </div>
  );
}

export default App;
 