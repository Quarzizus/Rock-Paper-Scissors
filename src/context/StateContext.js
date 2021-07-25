import React, { useState } from "react";
import AppContext from "./AppContext";

const StateContext = ({ children }) => {
  const [status, setStatus] = useState(null);
  const [played, setPlayed] = useState(false);
  const [oponente, setOponente] = useState(null);
  const [score, setScore] = useState(0);

  const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
  };
  const handlePicked = async () => {
    const movimientos = ["Piedra", "Papel", "Tijera"];
    const picked = movimientos[getRandomInt(0, 3)];
    setOponente(picked);
    return picked;
  };
  const handleScore = () => {
    status == "Ganador" ? setScore(score + 1) : setScore(0);
  };
  const delivery = async (e) => {
    const respuestaUsuario = await e.target.name;
    const respuestaMaquina = await handlePicked();
    if (respuestaUsuario == "Piedra" && respuestaMaquina == "Tijera")
      setStatus("Ganador");
    if (respuestaUsuario == "Piedra" && respuestaMaquina == "Papel")
      setStatus("Perdedor");
    if (respuestaUsuario == "Papel" && respuestaMaquina == "Piedra")
      setStatus("Ganador");
    if (respuestaUsuario == "Papel" && respuestaMaquina == "Tijera")
      setStatus("Perdedor");
    if (respuestaUsuario == "Tijera" && respuestaMaquina == "Papel")
      setStatus("Ganador");
    if (respuestaUsuario == "Tijera" && respuestaMaquina == "Piedra")
      setStatus("Perdedor");
    if (respuestaUsuario == respuestaMaquina) setStatus("Empate");
    handleScore();
  };

  return (
    <AppContext.Provider
      value={{
        delivery,
        handleScore,
        setPlayed,
        score,
        oponente,
        status,
        played,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default StateContext;
