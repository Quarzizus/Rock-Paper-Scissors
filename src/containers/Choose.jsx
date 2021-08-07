import React, { useContext } from "react";
import Paper from "../images/icon-paper.svg";
import Rock from "../images/icon-rock.svg";
import Scissors from "../images/icon-scissors.svg";
import Movimiento from "../components/Movimiento";
import MovimientoRival from "../components/MovimientoRival";
import Delivery from "../components/Delivery";
import AppContext from "../context/AppContext";
import "../styles/containers/Choose.scss";

const Choose = () => {
  const { played, respuestaUsuario, respuestaMaquina } = useContext(AppContext);
  return (
    <section className="Choose">
      <Movimiento icon={Paper} color="Azul" name="Paper" />
      <Movimiento icon={Rock} color="Rojo" name="Rock" />
      <Movimiento icon={Scissors} color="Amarillo" name="Scissors" />
      {played ? <MovimientoRival /> : null}
      {respuestaUsuario && respuestaMaquina && played ? <Delivery /> : null}
    </section>
  );
};

export default Choose;
