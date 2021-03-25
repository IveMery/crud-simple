import React, { useState } from 'react';
import './Tarea.css'

const Tarea = ({ tarea, borrarElementoDelArray , editarTarea}) => {

  const [completada, setCompletada] = useState(false)
const handleClick = () => {
    setCompletada(true)
  }

  const handleClickBorrar = () => {
    borrarElementoDelArray(tarea)
    console.log('desdes tarjeta tarea hadleclickborrar');
  }

  const editarTareaClick =()=>{
    editarTarea(tarea)
    
  }
  return (
   
        <div className='col-8'>
        <li className="list-group-item" className={completada ? "completada" : ""}>{tarea}</li>
        <button className='btn btn-primary btn-sm mb-2 mx-2' onClick={handleClick}>Completar tarea</button>
        <button className='btn btn-danger btn-sm mb-2 mx-2' onClick={handleClickBorrar}>Borrar tarea</button>
        <button className='btn btn-warning btn-sm mb-2 ' onClick={editarTareaClick}>Modificar tarea</button>
        </div>
        )
}

export default Tarea;
