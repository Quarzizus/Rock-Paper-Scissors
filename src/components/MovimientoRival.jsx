import React, { useContext, useEffect } from "react";
import AppContext from "../context/AppContext";
import "../styles/components/Movimiento.scss";

const MovimientoRival = () => {
  const { handlePicked, respuestaMaquina, setMovimiento, respuestaUsuario } =
    useContext(AppContext);

  useEffect(() => {
    handlePicked();
  }, []);

  if (!respuestaMaquina) {
    return (
      <article className="MovimientoRival Movimiento">
        <div className="Movimiento_container"></div>
      </article>
    );
  } else {
    return (
      <article className="MovimientoRival Movimiento">
        <div className="Movimiento_container">
          {console.log(respuestaUsuario, respuestaMaquina)}
          <img src={setMovimiento[respuestaMaquina][0]} alt="" />
        </div>
      </article>
    );
  }
};

export default MovimientoRival;
