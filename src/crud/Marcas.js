import React, { useEffect, useState } from "react";
import { HttptGet } from "../services/HttpGet";

export const Marcas = () => {
  const [marcas, setmarcas] = useState([]);
  useEffect(() => {
    getMarcas();
  }, []);
  // mostrar usuarios
  const getMarcas = async () => {
    const resp = await HttptGet("http://localhost:4000/api/v1/marca", "");
    console.log(resp);
    setmarcas(resp.data.marca);
  };

  return (
    <div>
      <h1>Marcas del sistema</h1>
      <ul>
        {marcas.map((u) => {
          return <li>Marca: {u.name + " ---  State: " + u.state}</li>;
        })}
      </ul>

      <form>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Nombre
          </label>
          <input type="text" class="form-control" />
        </div>
      </form>

      <select class="form-select" aria-label="Default select example">
        <option selected>Selecciona State</option>
        <option value="1">Activo</option>
        <option value="2">Inactivo</option>
      </select>
      <br />
      <button type="submit" class="btn btn-primary">
        Crear Marca
      </button>
      <button type="submit" class="btn btn-danger">
        Actualizar Marca
      </button>
    </div>
  );
};
