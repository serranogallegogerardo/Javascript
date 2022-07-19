
const MensajeColorido = (props) => {
    console.log('iteracion de MensajeColorido')
    //const name = props.name
    //const color= props.color
    //const message = props.message

    return <div>
                <p>----</p>
                <h2>Usted es: {props.name}</h2>
                <p style = {{ fontFamily : 'Cooper' , color : 'blue' }}>
                El mensaje que le llego dice:   
                {props.messageX}</p>
                <p>----</p>
            </div>
}

export default MensajeColorido;