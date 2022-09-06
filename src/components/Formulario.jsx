import { useState, useEffect } from "react"


const Formulario = () => {
  const [nombre, setNombre] = useState('');
  const [propietario, setPropietario] = useState('');
  const [email, setEmail] = useState('');
  const [fecha, setFecha] = useState('');
  const [sintomas, setSintomas] = useState('');

  const [error, setError] = useState(false);

  //Asi se puede asociar una funcion a un evento
  const handleSubmit = (e)=> {
    e.preventDefault();

  //Validacion de formulario
  if([nombre,propietario,email,fecha,sintomas].includes('')){
    console.log('Hay almenos un campo vacio')
    setError(true)
    return;
  }
  //lo devolvemos a false para que cuando corrigamos los campos ya no aparezca el mensaje
  setError(false)
}


  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className='font-black text-3xl text-center'>Seguimiento Pacientes</h2> 

      <p className='text-xl  mt-5 text-center mb-10'>
        Añade Paciente y {''}
        <span className='text-indigo-600 font-bold'>Administralos</span>
      </p>

      <form 
      //asociando el evento onSubmit a la funcion {handleSubmit}
      onSubmit={handleSubmit}
      className='bg-white shadow-md rounded-lg py-10 px-5 mb-10'>
        {error && 
        <div className="bg-red-800 text-white text-center p-3 uppercase font-bold mb-3 rounded-md" >
          <p>Todos los campos son obligatorios</p>
        </div>}

        <div className='mb-5'>
            <label htmlFor="mascota" className='block text-gray-700 uppercase font-bold'>
              Nombre de la mascota {nombre}
            </label>
            <input
              id="mascota"
              type="text"
              placeholder="Nombre de la mascota"
              className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
              value={nombre}
              onChange={(e)=> setNombre(e.target.value)}
            />
        </div>

        <div className='mb-5'>
            <label htmlFor="propietario" className='block text-gray-700 uppercase font-bold'>
              Nombre del propietario
            </label>
            <input
              id="propietario"
              type="text"
              placeholder="Nombre del propietario"
              className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
              value={propietario}
              onChange={(e)=> setPropietario(e.target.value)}
            />
        </div>

        <div className='mb-5'>
            <label htmlFor="email" className='block text-gray-700 uppercase font-bold'>
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Email del propietario"
              className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
              value={email}
              onChange={(e)=> setEmail(e.target.value)}
            />
        </div>

        <div className='mb-5'>
            <label htmlFor="alta" className='block text-gray-700 uppercase font-bold'>
              Alta
            </label>
            <input
              id="alta"
              type="date"
              className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
              value={fecha}
              onChange={(e)=> setFecha(e.target.value)}
            />
        </div>
        <div className='mb-5'>
            <label htmlFor="sintomas" className='block text-gray-700 uppercase font-bold'>
              Sintomas
            </label>
            <textarea
              id="sintomas"
              className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
              placeholder='Describe los sintomas de tu mascota'
              value={sintomas}
              onChange={(e)=> setSintomas(e.target.value)}
            />
        </div>

        <input 
          type="submit"
          className='bg-indigo-600 w-full p-3 text-white rounded-lg uppercase font-bold
           hover:bg-indigo-700 cursor-pointer transition-shadow'
          value="Agregar paciente"
        />
      </form>
    </div>
    
  )
}

export default Formulario