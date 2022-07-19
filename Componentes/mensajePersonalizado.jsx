
// const parrafoRandom = 'Mucho texto.... . .. . somos un conjunto de oraciones'
//      <Mensaje componentName = 'Mensaje' color = 'red' message = {parrafoRandom} />

const Mensaje = (props) => {
    
    return (
    <div>
        <strong style = {{ color : props.color }}>  
            Mi parrafo random dice: {props.message + ' -> y ademas me pueden agregar cosas desde el lado del componente.'}
        </strong>
        <p>Soy el componente {props.componentName}</p>
    </div> 
    );
}

  
export default Mensaje;