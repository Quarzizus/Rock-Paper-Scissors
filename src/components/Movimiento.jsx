import React, { useRef, useContext } from "react";
import AppContext from "../context/AppContext";
import "../styles/components/Movimiento.scss";

const Movimiento = ({ icon, color, name }) => {
  const { setPlayed, played, setRespuestaUsuario } = useContext(AppContext);
  const movimientoRef = useRef(null);

  const handleClick = () => {
    const movimiento = movimientoRef.current;
    // [Simblings]
    [...movimiento.parentNode.childNodes].map((mov) => {
      mov == movimiento
        ? mov.classList.add("Select")
        : mov.classList.add("NoSelect");
    });
    setRespuestaUsuario(name);
    setPlayed(true);
  };

  return (
    <article
      className={`Movimiento ${color}`}
      onClick={() => (!played ? handleClick() : null)}
      ref={movimientoRef}
      name={name}
    >
      <div className="Movimiento_container">
        <img src={icon} alt="" />
      </div>
    </article>
  );
};

export default Movimiento;
