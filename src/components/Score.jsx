import React, { useContext } from "react";
import AppContext from "../context/AppContext";
import { Link } from "react-router-dom";
import "../styles/components/Score.scss";
import Logo from "../images/logo.svg";

const Score = () => {
  const { score } = useContext(AppContext);
  return (
    <section className="Score">
      <Link to="/">
        <img src={Logo} />
      </Link>
      <article className="Score_count">
        <h2>Score</h2>
        <p>{score}</p>
      </article>
    </section>
  );
};

export default Score;
