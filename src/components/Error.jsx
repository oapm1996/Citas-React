
/**
 * It takes a prop called mensaje and returns a div with a className, a paragraph with the value of the
 * prop mensaje.
 * @returns A React component.
 */
/*A error le pasamos mensaje que viene desde el div form del formulario y este devuelve el mensaje y pasa el parametro {mensaje}
a la siguiente funcion Error y a su ves esta funcion muestra visualmente pasandoselo al parrafo <p>*/
const Error = ({mensaje}) => {
    return (
        <div className="bg-red-800 text-white text-center p-3 uppercase font-bold mb-3 rounded-md" >
          <p>{mensaje}</p>
        </div>
    )
}

export default Error;