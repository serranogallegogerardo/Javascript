//import logo from './logo.svg';
import React from 'react';
import './App.css';
import {useState} from 'react';

function App() {

  const [number,setNumber] = useState(0);

  const alertar = () => {
    alert('No se puede ir debajo de 0')
    return 0
  }

  const ActualizarBien = () => {
    setNumber(number === 0 ? alertar() : (number-1))
  }

  return (
    <div className="App">

      <div className = 'Title'>
        <h1 id = 'headTitle'>freeCodeCamp🔥</h1>
      </div>

      <div className = 'Content'>

        <span id = 'Cajita'><p id ='Numero'>{number}</p></span>

      </div>
      {/*<button onClick={() => alert("Hello!")}>Incrementar</button> */}
      <div className = 'Rectangles'>
        <button id = 'button-1'onClick={() => setNumber(number + 1)}>Incrementar</button>
        <button id = 'button-2' onClick={() => ActualizarBien()}>Decrementar</button>
      </div>
      
    </div>
  );
}

export default App;
