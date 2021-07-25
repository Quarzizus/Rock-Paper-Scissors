import React from "react";
import "../styles/components/Score.scss";
import Logo from "../images/logo.svg";

const Score = () => {
  return (
    <section className="Score">
      <img src={Logo} />
      <article className="Score_count">
        <h2>Score</h2>
        <p>12</p>
      </article>
    </section>
  );
};

export default Score;
