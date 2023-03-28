import React, { useContext } from "react";
import Context from "./context/Context";

function Ubicacion() {
  const { alumno } = useContext(Context);
  const idioma = alumno[3].idioma;
  return (
    <div className="ubicacion">
      <h1>{alumno[idioma].boton2}</h1>
      <div className="texto">{alumno[idioma].direccion}</div>
    </div>
  );
}

export default Ubicacion;
