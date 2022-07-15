//import logo from './logo.svg';
import './App.css';
// las funciones se declaran en mayuscula
//import rct from './assets/reactimage.png' insertar img en una constante

import Mensaje from './mensaje'
import Salute from './Salute'
import Footer from './footer'

function App() {
  // variables.. y cosas aca
  //const mensaje = 'Soy una constante'
  //para tener una idea
  //header > nav > article(section, .., section n ) > aside > footer
  //variables del ejercicio
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  

  let date = new Date().toDateString()
  
  return (
    // objetos no puede  renderizar directamente
    <div className="App">
      
      <nav>
        <div id = 'nav'>
          <h1> Pagina web de pruebas </h1>
          <h2>Probando componentes</h2>
        </div>
      </nav>
      
      <div>
        <div>
          <br></br>
          <Mensaje color = 'Blue' message ='Prueba de'/>
          <br></br>
          <Mensaje color = 'yellow'message ='funcionamiento de'/>
          <br></br>
          <Mensaje color ='darkred' message ='React'/>
          <br></br>
          <Salute name = 'Pedro'></Salute>
          <Salute name = 'Juan'></Salute>
        </div>
        <div>
          <h3>Fecha de hoy:</h3>
          <p>{date.toString()}</p>
        </div>
      </div>

      <aside>
        <div>
        <h1>{course}</h1>
          <p>
            {part1} {exercises1}
          </p>
          <p>
            {part2} {exercises2}
          </p>
          <p>
            {part3} {exercises3}
          </p>
        <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
        </div>
      </aside>
      <Footer></Footer>
    </div>
  );
}
/*Mostrar imagen de react
<div>
        <img src = {rct} alt = "" ></img>
      </div>
*/
export default App;
