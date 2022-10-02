import React from "react";

export const Header = ({setShow, show}) => {
  const handleShow = (ref) => {
    let obj = {
      users: false,
      marcas: false,
      tipoEquipo: false,
      estadoEquipo: false
    }
    obj = {
      ...obj,
      [ref]: true
    }
    setShow(obj)
  }
  return (
    <div>
      <ul class="nav justify-content-center">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#" onClick={() => handleShow('users')}>
            Usuarios
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" onClick={() => handleShow('marcas')}>
            Marcas
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" onClick={() => handleShow('tipoEquipo')}>
            Tipo De Equipo
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" onClick={() => handleShow('estadoEquipo')}>
            Estado De Equipo
          </a>
        </li>
      </ul>
    </div>
  );
};
