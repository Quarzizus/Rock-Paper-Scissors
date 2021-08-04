import React, { useContext } from "react";
import Movimiento from "../components/Movimiento";
import MovimientoRival from "../components/MovimientoRival";
import Rock from "../images/icon-rock.svg";
import Paper from "../images/icon-paper.svg";
import Scissors from "../images/icon-scissors.svg";
import Delivery from "../components/Delivery";
import AppContext from "../context/AppContext";
import "../styles/containers/Success.scss";

const Success = () => {
  const { respuestaMaquina, respuestaUsuario } = useContext(AppContext);
  const setMovimiento = {
    Paper: [Paper, "Azul", "Paper"],
    Rock: [Rock, "Rojo", "Rock"],
    Scissors: [Scissors, "Amarillo", "Scissors"],
  };
  return (
    <section className="Success">
      {respuestaUsuario ? (
        <Movimiento
          icon={setMovimiento[respuestaUsuario][0]}
          color={setMovimiento[respuestaUsuario][1]}
          name={setMovimiento[respuestaUsuario][2]}
        />
      ) : (
        <Movimiento />
      )}
      <Delivery />
      {respuestaMaquina ? console.log(setMovimiento[respuestaMaquina]) : null}
    </section>
  );
};

export default Success;
