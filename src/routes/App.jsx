import React from "react";
import Score from "../components/Score";
import Movimiento from "../components/Movimiento";
import Rules from "../components/Rules";
import Choose from "../containers/Choose";
import Paper from "../images/icon-paper.svg";
import Rock from "../images/icon-rock.svg";
import Scissors from "../images/icon-scissors.svg";
import "../styles/Variables.scss";

const App = () => {
  return (
    <div className="App">
      <Score />
      <Choose>
        <Movimiento icon={Paper} color="Azul" />
        <Movimiento icon={Rock} color="Rojo" />
        <Movimiento icon={Scissors} color="Amarillo" />
      </Choose>
      <Rules />
    </div>
  );
};

export default App;
