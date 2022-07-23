import logo from './logo.svg';
import React from 'react';
import './App.css';
import {useState} from 'react';

function App() {

  const [number,setNumber] = useState(4);

  return (
    <div className="App">

      <div className = 'Title'>
        <h1 id = 'headTitle'>freeCodeClicker🔥</h1>
      </div>

      <div className = 'Content'>

        <span id = 'Cajita'><p id ='Numero'>{number}</p></span>

      </div>
      {/*<button onClick={() => alert("Hello!")}>Incrementar</button> */}
      <div className = 'Rectangles'>
        <button id = 'button-1'onClick={() => setNumber(number + 1)}>Incrementar</button>
        <button id = 'button-2' onClick={() => setNumber(number - 1)}>Decrementar</button>
      </div>
      
    </div>
  );
}

export default App;

/*

Viendo
  const Incrementar = () => {
    return setNumber = number +1;
  }

  const Decrementar = () => {
    return setNumber = number -1;
  }
*/
