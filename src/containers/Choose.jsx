import React from "react";
import Paper from "../images/icon-paper.svg";
import Rock from "../images/icon-rock.svg";
import Scissors from "../images/icon-scissors.svg";
import Movimiento from "../components/Movimiento";
import "../styles/containers/Choose.scss";

const Choose = () => {
  return (
    <section className="Choose">
      <Movimiento icon={Paper} color="Azul" name="Paper" />
      <Movimiento icon={Rock} color="Rojo" name="Rock" />
      <Movimiento icon={Scissors} color="Amarillo" name="Scissors" />
    </section>
  );
};

export default Choose;
