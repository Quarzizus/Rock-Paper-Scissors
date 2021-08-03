import React, { useRef, useContext } from "react";
import AppContext from "../context/AppContext";
import "../styles/components/Movimiento.scss";

const Movimiento = ({ icon, color }) => {
  const { setPlayed } = useContext(AppContext);
  const movimientoRef = useRef(null);
  const selectSimblings = (node) => {
    [...node.parentNode.childNodes].map((child) => {
      !child.classList.contains("Select") ? child.remove() : null;
    });
  };
  const handleClick = () => {
    const movimiento = movimientoRef.current;
    movimiento.classList.toggle("Select");
    selectSimblings(movimiento);
    setPlayed(true);
  };
  return (
    <article
      className={`Movimiento ${color}`}
      onClick={handleClick}
      ref={movimientoRef}
    >
      <div className="Movimiento_container">
        <img src={icon} alt="" />
      </div>
    </article>
  );
};

export default Movimiento;
