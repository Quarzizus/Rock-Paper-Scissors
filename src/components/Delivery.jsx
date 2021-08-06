import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router";
import AppContext from "../context/AppContext";
import "../styles/components/Delivery.scss";

const Delivery = () => {
  const { setPlayed, delivery, status, respuestaMaquina } =
    useContext(AppContext);
  const history = useHistory();
  useEffect(() => {
    delivery();
  }, [respuestaMaquina]);

  const handleClick = () => {
    setPlayed(false);
    history.push("/");
  };

  return (
    <section className="Delivery">
      <h2>{!status ? "None" : status}</h2>
      {console.log(status)}
      <button onClick={handleClick}>PLAY AGAIN</button>
    </section>
  );
};

export default Delivery;
