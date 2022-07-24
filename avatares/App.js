/* eslint-disable jsx-a11y/alt-text */
//import logo from './logo.svg';
import { toBeEnabled } from '@testing-library/jest-dom/dist/matchers';
import React,{useState} from 'react';
import './App.css';



function App() {



  //componente
  const Avatar = ({id = '-1', nombre = 'unknown', size = 'normal'}) => {

    //estado
    const [state,setState] = useState(false)

    //propiedades
    const src = `https://randomuser.me/api/portraits/women/${id}.jpg`
    //renderizado condicional alternativo
    const classState = state ? 'enabled' : 'disabled'

    return (
      <picture>
        <span style = {{marginTop : '2em',marginBottom:'2em'}}>
            <img 
              className = {classState} 
              id = {size}
              onClick = {(e) => 
                setState(!state)
              }
              src = {src} 
            />
    
            <p>{nombre}</p>
        </span>
      </picture>
    )
  }

  return (
    <div className="App">
      <Avatar id = '3'/>
      <Avatar id = '4' nombre = 'Julia' size = 'large'/>
      <Avatar id = '5' nombre = 'Estefania' size = 'large'/>
      <Avatar id = '6' nombre = 'Marta' />
      <Avatar />
      <Avatar id = '8' nombre = 'Mirta' size = 'small'/>

    </div>
  );
}

export default App;
