import React from "react";
import "../styles/components/Movimiento.scss";

const MovimientoRival = ({ icon }) => {
  return (
    <article className="MovimientoRival Movimiento">
      <div className="Movimiento_container">
        <img src={icon} alt="" />
        {/* {console.log(icon)} */}
      </div>
    </article>
  );
};

export default MovimientoRival;
