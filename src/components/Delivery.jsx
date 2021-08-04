import React, { useContext } from "react";
import { useHistory } from "react-router";
import AppContext from "../context/AppContext";
import "../styles/components/Delivery.scss";

const Delivery = () => {
  const { status, delivery, setPlayed } = useContext(AppContext);
  const history = useHistory();
  const handleClick = () => {
    setPlayed(false);
    history.push("/");
  };
  return (
    <section className="Delivery">
      <h2>{status || "None"}</h2>
      <button onClick={handleClick}>PLAY AGAIN</button>
    </section>
  );
};

export default Delivery;
