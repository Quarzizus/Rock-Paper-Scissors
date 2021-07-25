import React from "react";
import "../styles/components/Movimiento.scss";

const Movimiento = ({ icon, color }) => {
  return (
    <article className={`Movimiento ${color}`}>
      <div className="Movimiento_container">
        <img src={icon} alt="" />
      </div>
    </article>
  );
};

export default Movimiento;
