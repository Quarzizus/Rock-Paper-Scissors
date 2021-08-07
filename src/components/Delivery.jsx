import React, { useContext, useEffect } from "react";
import AppContext from "../context/AppContext";
import "../styles/components/Delivery.scss";

const Delivery = () => {
  const {
    setPlayed,
    delivery,
    status,
    setRespuestaMaquina,
    setRespuestaUsuario,
    handleScore,
  } = useContext(AppContext);

  useEffect(() => {
    delivery();
  }, []);

  const handleClick = () => {
    [...document.querySelectorAll(".Movimiento")].map((mov) => {
      mov.classList.contains("Select")
        ? mov.classList.remove("Select")
        : mov.classList.remove("NoSelect");
    });
    setRespuestaMaquina(null);
    setRespuestaUsuario(null);
    handleScore();
    setPlayed(false);
  };

  if (!status) {
    return null;
  } else {
    return (
      <section className="Delivery">
        <h2>{status}</h2>
        <button onClick={handleClick}>PLAY AGAIN</button>
      </section>
    );
  }
};

export default Delivery;
