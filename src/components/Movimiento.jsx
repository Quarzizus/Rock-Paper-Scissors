import React, { useRef, useContext } from "react";
import "../styles/components/Movimiento.scss";
import AppContext from "../context/AppContext";

const Movimiento = ({ icon, color }) => {
  const { played, setPlayed } = useContext(AppContext);
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
      {console.log(played)}
      <div className="Movimiento_container">
        <img src={icon} alt="" />
      </div>
    </article>
  );
};

export default Movimiento;
