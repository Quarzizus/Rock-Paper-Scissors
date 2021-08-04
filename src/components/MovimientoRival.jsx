import React, { useContext } from "react";
// import AppContext from "../context/AppContext";
import "../styles/components/Movimiento.scss";

const MovimientoRival = ({ icon, picked }) => {
  // const { setRespuestaMaquina } = useContext(AppContext);

  return (
    <article className="MovimientoRival Movimiento">
      <div className="Movimiento_container">
        <img src={icon} alt="" />
      </div>
    </article>
  );
};

export default MovimientoRival;
