

import "./App.css";
import { Header } from "./crud/Header";
import { Users } from "./crud/Users";
import { Marcas } from "./crud/Marcas";
import { TipoEquipo} from "./crud/TipoEquipo";
import { EstadoEquipo } from "./crud/EstadoEquipo";
import { useState } from "react";


const App = () => {
  const [show, setShow] = useState({
    users: true,
    marcas: false,
    tipoEquipo: false,
    estadoEquipo: false
  });
  
  return (
    <>
      <Header 
        setShow={setShow} 
        show={show} 
      />
      {show.users && <Users />}
      {show.marcas && <Marcas />}
      {show.tipoEquipo && <TipoEquipo />}
      {show.estadoEquipo && <EstadoEquipo />}
      
    </>

  );
}

export default App;
