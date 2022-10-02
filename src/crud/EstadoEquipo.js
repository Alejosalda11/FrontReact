import React, { useEffect, useState } from "react";
import { HttptGet } from "../services/HttpGet";

export const EstadoEquipo = () => {
  const [estados, setEstado] = useState([]);
  useEffect(() => {
    getEstado();
  }, []);

  const getEstado = async () => {
    const resp = await HttptGet("http://localhost:4000/api/v1/estado", "");
    console.log(resp);
    setEstado(resp.data.estado);
  };

  return (
    <div>
      <h1>Estado de Equipos</h1>
      <ul>
        {estados.map((u) => {
          return (
            <li>Estado de Equipo: {u.name + " ---  State: " + u.state}</li>
          );
        })}
      </ul>

      <select class="form-select" aria-label="Default select example">
        <option selected>Selecciona Estado de Equipo</option>
        <option value="1">En Uso</option>
        <option value="2">En Bodega</option>
        <option value="2">Depreciado</option>
      </select>
            <br/>
      <select class="form-select" aria-label="Default select example">
        <option selected>Selecciona State</option>
        <option value="1">Activo</option>
        <option value="2">Inactivo</option>
      </select>
      <br />
      <button type="submit" class="btn btn-primary">
        Crear Estado de Equipo
      </button>
      <button type="submit" class="btn btn-danger">
        Actualizar Estado De Equipo
      </button>
    </div>
  );
};
