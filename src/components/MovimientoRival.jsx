import React, { useContext, useEffect } from "react";
import AppContext from "../context/AppContext";
import "../styles/components/Movimiento.scss";

const MovimientoRival = ({ icon }) => {
  const { setRespuestaMaquina, getRandomInt } = useContext(AppContext);

  useEffect(() => {
    const movimientos = ["Rock", "Paper", "Scissors"];
    const picked = movimientos[getRandomInt(0, 3)];
    setRespuestaMaquina(picked);
  }, []);

  return (
    <article className="MovimientoRival Movimiento">
      <div className="Movimiento_container">
        {/* <img src={icon} alt="" /> */}
        {/* {console.log(icon)} */}
      </div>
    </article>
  );
};

export default MovimientoRival;
