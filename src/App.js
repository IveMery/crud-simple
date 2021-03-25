import React, { useState } from 'react';
import Tarea from './components/Tarea';

const App = () => {
  const [valorDelInput, setValorDelInput] = useState(''); 
  const [lista, setLista] = useState([  
    'Lavar ropa',
    'Corregir TPS',
    'Desarmar cajas',
    'Cepillar gatos',
    'Insultar a Pepo',
    'Putear a d1sn3y mientras mando CVs a otras empresas',
  ])

  const [modoEdicion, setModoEdicion] = useState(false)
  const [id, setId] = useState('')
  const [error, setError] = useState(null)

  const borrarElementoDelArray = (tarea) => {
    // aqui borramos un elemento del array
    console.log(`estoy en la funcion borrar elemento del array y el parametro que me mandaron es`, tarea)
    const arrayFiltrado = lista.filter((item) => item !== tarea)
    console.log(arrayFiltrado);
    setLista(arrayFiltrado)
  }

  const editarTarea = tarea => {
    setModoEdicion(true)
    setValorDelInput(tarea)
    setId(tarea)
  }

  const modificarTarea = () => {
    const arrayEditado = lista.map(item => item === id ? valorDelInput : item)
    if (!valorDelInput.trim()) {
      console.log('elemento vacio');
      setError('Escriba algo por favor!!!');
      return
    }
    setLista(arrayEditado)
    setModoEdicion(false)
    setValorDelInput('')
    setId('')
    setError(null)
  }

  const handleClick = () => { //fuego guardarse esto

    if (!valorDelInput.trim()) {
      console.log('elemento vacio');
      setError('Escriba algo por favor!!!');
      return
    }
    setLista([
      ...lista,
      valorDelInput])
    setValorDelInput("")
    setError(null)
  };
  
  const handleChange = e => {
    // en la funcion setState se pasa *el nuevo valor de la variable*
    setValorDelInput(e.target.value);
};

  // En el handle click tenemos en el console.log el valor del input,
  // la tarea que el usuario quiere agregar
  // TU MISION, SI DESEAS ACEPTARLA, es lograr que esa tarea se vea en la lista
  // con todas las demas.

  return (
    <div className='container mt-5'>
      <div className='row'>
        <h1>Lista de tareas</h1>
        <ul className="list-group">
          {
            lista.length === 0 ? (<li className="list-group-item mb-4" >No hay tareas</li>) : (lista.map((tarea, index) => (
              <Tarea
                key={index}
                tarea={tarea}
                borrarElementoDelArray={borrarElementoDelArray}
                editarTarea={editarTarea}
              />
            )))
          }
        </ul>
        <div className='col-4'>
          <label className="text-center">
            {
              modoEdicion ? 'Editar Tarea' : 'Agregar Tarea'
            }

            {
              error ? (<p className='text-danger'>{error}</p>) : null
            }
            <input
              value={valorDelInput}
              onChange={handleChange}
              type="text"
              placeholder="Por ej, putear a Pepo"
              className="form-control mb-2"
            />
          </label>
          <button className={modoEdicion ? 'btn btn-warning mx-2' : 'btn btn-success mx-2'} onClick={modoEdicion ? modificarTarea : handleClick}>{
            modoEdicion ? 'Editar Tarea' : 'Agregar Tarea'
          }
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
