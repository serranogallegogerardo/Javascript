
const Mensaje = (props) => {
    console.log(props)
    return <div>
        <strong style = {{color : props.color}}>  
        {props.message}      
        </strong>
    </div>
    
}
  
export default Mensaje;