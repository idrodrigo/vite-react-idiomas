import React, { useContext } from "react";
import Context from "./context/Context";

function Profesor() {
  const { alumno } = useContext(Context);
  const idioma = alumno[3].idioma;
  const imagen = `../images/${alumno[idioma].foto}`;
  return (
    <div className="profesor">
      <h1>{alumno[idioma].boton1}:</h1>
      <div className="photo">
        <img className="img" src={imagen} />
      </div>
      <div className="name">{alumno[idioma].nombre}</div>
    </div>
  );
}

export default Profesor;
