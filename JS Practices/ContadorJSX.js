import logo from './logo.svg';
import React from 'react';
import './App.css';
import {useState} from 'react';

function App() {

  const [number,setNumber] = useState(4);

  return (
    <div className="App">

      <div className = 'Title'>
        <h1 id = 'headTitle'>freeClicker🔥</h1>
      </div>

      <div className = 'Content'>

        <span id = 'Cajita'><p id ='Numero'>{number}</p></span>

      </div>
      {/*<button onClick={() => alert("Hello!")}>Incrementar</button> */}
      <div className = 'Rectangle1'>
        <button onClick={() => setNumber(number + 1)}>Incrementar</button>
        <button onClick={() => setNumber(number - 1)}>Decrementar</button>
      </div>
      
    </div>
  );
}

export default App;

/*

Viendo como implementar esto bien...
da error aun..

  const Incrementar = () => {
    return setNumber = number +1;
  }

  const Decrementar = () => {
    return setNumber = number -1;
  }
*/
