import React, { useContext, useEffect } from "react";
import AppContext from "../context/AppContext";
import "../styles/components/Movimiento.scss";

const MovimientoRival = () => {
  const { respuestaMaquina, setMovimiento, handlePicked } =
    useContext(AppContext);

  useEffect(() => {
    setTimeout(handlePicked, 2000);
  }, []);

  if (!respuestaMaquina) {
    return (
      <article className="MovimientoRival Movimiento Negro">
        <div className="Movimiento_container"></div>
      </article>
    );
  } else {
    return (
      <article
        className={`MovimientoRival Movimiento ${setMovimiento[respuestaMaquina][1]}`}
      >
        <div className="Movimiento_container">
          <img src={setMovimiento[respuestaMaquina][0]} alt="" />
        </div>
      </article>
    );
  }
};

export default MovimientoRival;
