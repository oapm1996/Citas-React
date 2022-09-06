import React from "react";
//Se agrego props en el header para poder leer los props del app.jsx
const Header = ()=>{ //({toma1Valor})
    /*De esta manera se pueden pasar valores de los promps hijos a los padres
    creando una funcion en el padre que pida un parametro, y que el hijo 
    envie este parametro, en este caso por la funcion toma1Valor*/
    /*const variableHeader = true
    toma1Valor(variableHeader)*/

    return(
        <h1 className="font-black text-5xl text-center md:w-2/3 mx-auto">
            Seguimiento Pacientes {''}
            <span className="text-indigo-600">Veterinaria</span>
        </h1>
    )
}

export default Header