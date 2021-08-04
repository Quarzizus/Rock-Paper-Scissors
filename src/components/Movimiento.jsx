import React, { useRef, useContext } from "react";
import { useHistory } from "react-router";
import AppContext from "../context/AppContext";
import "../styles/components/Movimiento.scss";

const Movimiento = ({ icon, color, name }) => {
  const { setPlayed, setRespuestaUsuario, played } = useContext(AppContext);
  const movimientoRef = useRef(null);
  const history = useHistory();

  const deleteSimblings = (node) => {
    [...node.parentNode.childNodes].map((child) => {
      !child.classList.contains("Select") ? child.remove() : null;
    });
  };

  const handleClick = () => {
    setRespuestaUsuario(name);
    const movimiento = movimientoRef.current;
    movimiento.classList.add("Select");
    deleteSimblings(movimiento);
    setPlayed(true);
    history.push("/success");
  };

  if (!color || !name || !icon) {
    return (
      <article className="Movimiento Negro Select">
        <div className="Movimiento_container"></div>
      </article>
    );
  } else {
    return (
      <article
        className={`Movimiento ${color} ${played ? "Select" : null}`}
        onClick={handleClick}
        ref={movimientoRef}
        name={name}
      >
        <div className="Movimiento_container">
          <img src={icon} alt="" />
        </div>
      </article>
    );
  }
};

export default Movimiento;
