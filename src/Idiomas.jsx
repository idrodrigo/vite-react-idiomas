import React, { useContext } from "react";
import Context from "./context/Context";
import spain from '../public/images/spain.jpg'
import francia from '../public/images/francia.png'
import uk from '../public/images/uk.png'

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
        <img src={spain}/>
      </div>
      <div className="flag" onClick={cambio2}>
        <img src={francia} />
      </div>
      <div className="flag" onClick={cambio3}>
        <img src={uk} />
      </div>
    </div>
  );
}

export default Idiomas;
