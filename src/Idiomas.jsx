import React, { useContext } from "react";
import Context from "./context/Context";

function Idiomas() {
  const { setAlumno } = useContext(Context);
  const { alumno } = useContext(Context);
  const sustitucion = (posicion) => {
    setAlumno(
      alumno.map((dato, index) =>
        index == 3 ? { ...dato, idioma: posicion } : { ...dato }
      )
    );
  };
  const cambio1 = () => {
    sustitucion(0);
  };

  const cambio2 = () => {
    sustitucion(1);
  };

  const cambio3 = () => {
    sustitucion(2);
  };
  return (
    <div className="idiomas">
      <div className="flag" onClick={cambio1}>
        <img src="../images/spain.jpg" />
      </div>
      <div className="flag" onClick={cambio2}>
        <img src="../images/uk.png" />
      </div>
      <div className="flag" onClick={cambio3}>
        <img src="../images/francia.png" />
      </div>
    </div>
  );
}

export default Idiomas;