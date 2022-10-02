import React, { useEffect, useState } from "react";
import { HttptGet } from "../services/HttpGet";
import { HttpPost } from "../services/HttpPost";

export const Users = () => {
  const [users, setusers] = useState([]);
  useEffect(() => {
    getUsers();
  }, []);
  // mostrar usuarios
  const getUsers = async () => {
    const resp = await HttptGet("http://localhost:4000/api/v1/user", "");
    console.log(resp);
    setusers(resp.data.users);
  };

  const setUser = async (obj) => {
    const resp = await HttpPost("http://localhost:4000/api/v1/user", obj, true);
    console.log(resp);
    //setusers(resp.data.users);
  };
  return (
    <div>
      <h1>Usuarios del sistema</h1>
      <ul>
        {users.map((u) => {
          return (
            <li>
              {" "}
              Nombre:{" "}
              {u.name + " --- Correo:   " + u.email + " --- State: " + u.state}
            </li>
          );
        })}
      </ul>
     {/*  <button
        classNameName="btn btn-primary"
        onClick={() =>
          setUser({
            name: "edwin",
            email: "ed@maile.es",
            state: 1,
            dateCreated: "",
            dateUpdated: "",
          })
        }
      ></button> */}

      <form>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label" placeholder="Ingrese Nombre">
            Nombre
          </label>
          <input type="text" className="form-control" />
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label" placeholder="Ingrese Correo Electronico">
            Email
          </label>
          <input type="email" className="form-control" id="exampleInputPassword1" />
        </div>
      </form>

      <select className="form-select" aria-label="Default select example">
        <option selected>Selecciona State</option>
        <option value="1">Activo</option>
        <option value="2">Inactivo</option>
      </select>
        <br/>
      <button type="submit" className="btn btn-primary">
        Crear Usuario
      </button>
      <button type="submit" className="btn btn-danger">
        Actualizar Usuario
      </button>
    </div>
  );
};
