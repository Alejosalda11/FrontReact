
import React, { useEffect, useState } from 'react'
import { HttptGet } from '../services/HttpGet'

export const TipoEquipo = () => {
  const [tipos, setTipo] = useState([]);
  useEffect(() => {
    getTipo();
  }, []);

  const getTipo = async () => {
    const resp = await HttptGet("http://localhost:4000/api/v1/tipo", "");
    console.log(resp);
    setTipo(resp.data.tipo);
  };

  return (
    <div>
        <h1>Tipos de Equipos</h1>
        <ul>
            {tipos.map(u => {
                return ( 
                <li>Tipo De Equipo:   {u.name+'  ---  State:  '+ u.state}</li>
                )
            })}
           
        </ul>

        <select class="form-select" aria-label="Default select example">
        <option selected>Tipo De Equipo</option>
        <option value="1">Computo</option>
        <option value="2">Moviles</option>
      </select>
      <br/>

      <select class="form-select" aria-label="Default select example">
        <option selected>Selecciona State</option>
        <option value="1">Activo</option>
        <option value="2">Inactivo</option>
      </select>
      <br />
      <button type="submit" class="btn btn-primary">
        Crear Tipo de Equipo
      </button>
      <button type="submit" class="btn btn-danger">
        Actualizar Tipo De Equipo
      </button>
       
    </div>
  )
};
