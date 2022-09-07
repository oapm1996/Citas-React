/* Importing the components from the components folder. */
import { useState } from 'react'
import Formulario from "./components/Formulario"
import Header from "./components/Header"
import ListadoPacientes  from "./components/ListadoPacientes"

function App() {
  /* Creating a state called pacientes and a function called setPacientes. */
  const [pacientes, setPacientes] = useState ([]);

  return (
    <div className="container mx-auto mt-20">
      <Header/>

        <div className="mt-12 md:flex">
          <Formulario
            /* Passing the pacientes state to the Formulario component. */
            pacientes={pacientes}
            /* Passing the setPacientes function to the Formulario component. */
            setPacientes = {setPacientes}
          />
          <ListadoPacientes/>
        </div>
    </div>
  )
}



export default App
