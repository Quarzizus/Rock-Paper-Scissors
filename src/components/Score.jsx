import React from "react";
import { Link } from "react-router-dom";
import "../styles/components/Score.scss";
import Logo from "../images/logo.svg";

const Score = () => {
  return (
    <section className="Score">
      <Link to="/">
        <img src={Logo} />
      </Link>
      <article className="Score_count">
        <h2>Score</h2>
        <p>12</p>
      </article>
    </section>
  );
};

export default Score;
