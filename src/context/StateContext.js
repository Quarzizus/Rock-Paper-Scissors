import React, { useState } from "react";
import AppContext from "./AppContext";

const StateContext = ({ children }) => {
  const [status, setStatus] = useState(null);
  const [played, setPlayed] = useState(false);
  const [respuestaMaquina, setRespuestaMaquina] = useState(null);
  const [respuestaUsuario, setRespuestaUsuario] = useState(null);
  const [score, setScore] = useState(0);

  const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
  };

  const handleScore = () => {
    status == "Ganador" ? setScore(score + 1) : setScore(0);
  };
  const delivery = () => {
    if (respuestaUsuario == "Rock" && respuestaMaquina == "Scissors")
      setStatus("Ganador");
    if (respuestaUsuario == "Rock" && respuestaMaquina == "Paper")
      setStatus("Perdedor");
    if (respuestaUsuario == "Paper" && respuestaMaquina == "Rock")
      setStatus("Ganador");
    if (respuestaUsuario == "Paper" && respuestaMaquina == "Scissors")
      setStatus("Perdedor");
    if (respuestaUsuario == "Scissors" && respuestaMaquina == "Paper")
      setStatus("Ganador");
    if (respuestaUsuario == "Scissors" && respuestaMaquina == "Rock")
      setStatus("Perdedor");
    if (respuestaUsuario == respuestaMaquina) setStatus("Empate");

    // handleScore();
  };

  return (
    <AppContext.Provider
      value={{
        delivery,
        handleScore,
        getRandomInt,
        setPlayed,
        setRespuestaMaquina,
        setRespuestaUsuario,
        respuestaMaquina,
        respuestaUsuario,
        score,
        status,
        played,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default StateContext;
