import React, { useContext } from "react";
import Movimiento from "../components/Movimiento";
import MovimientoRival from "../components/MovimientoRival";

import Delivery from "../components/Delivery";
import AppContext from "../context/AppContext";
import "../styles/containers/Success.scss";

const Success = () => {
  const { respuestaUsuario, setMovimiento } = useContext(AppContext);

  return (
    <section className="Success">
      {respuestaUsuario ? (
        <Movimiento
          icon={setMovimiento[respuestaUsuario][0]}
          color={setMovimiento[respuestaUsuario][1]}
          name={setMovimiento[respuestaUsuario][2]}
        />
      ) : (
        <Movimiento />
      )}
      <Delivery />
      <MovimientoRival />
    </section>
  );
};

export default Success;
