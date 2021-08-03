import React, { useContext, useEffect } from "react";
import AppContext from "../context/AppContext";
import "../styles/components/Movimiento.scss";

const MovimientoRival = ({ icon }) => {
  const { handlePicked, oponente } = useContext(AppContext);
  const Icon = icon[oponente];
  useEffect(() => {
    handlePicked();
  }, []);
  return (
    <article className="MovimientoRival Movimiento">
      <div className="Movimiento_container">
        <img src={Icon} alt="" />
      </div>
    </article>
  );
};

export default MovimientoRival;
