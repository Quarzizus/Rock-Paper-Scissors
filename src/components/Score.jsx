import React, { useContext, useEffect } from "react";
import AppContext from "../context/AppContext";
import "../styles/components/Score.scss";
import Logo from "../images/logo.svg";

const Score = () => {
  const { score } = useContext(AppContext);

  return (
    <section className="Score">
      <img src={Logo} />
      <article className="Score_count">
        <h2>Score</h2>
        <p>{score}</p>
      </article>
    </section>
  );
};

export default Score;
