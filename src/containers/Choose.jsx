import React, { useContext } from "react";
import Paper from "../images/icon-paper.svg";
import Rock from "../images/icon-rock.svg";
import Scissors from "../images/icon-scissors.svg";
import Movimiento from "../components/Movimiento";
import MovimientoRival from "../components/MovimientoRival";
import AppContext from "../context/AppContext";
import "../styles/containers/Choose.scss";

const Choose = () => {
  const { played } = useContext(AppContext);
  return (
    <section className="Choose">
      <Movimiento icon={Paper} color="Azul" />
      <Movimiento icon={Rock} color="Rojo" />
      <Movimiento icon={Scissors} color="Amarillo" />
      {played ? <MovimientoRival icon={{ Paper, Rock, Scissors }} /> : null}
      {/* {setTimeout(() => {
        <div>Holiwi</div>;
      }, 3000)} */}
    </section>
  );
};

export default Choose;
