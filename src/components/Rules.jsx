import React, { useRef } from "react";
import RulesIMG from "../images/image-rules.svg";
import "../styles/components/Rules.scss";

const Rules = () => {
  const containerRef = useRef(null);
  const handleChecked = () => {
    const container = containerRef.current;
    container.classList.toggle("Active");
    console.log(container.classList);
  };
  return (
    <footer className="Rules">
      <button type="button" onClick={handleChecked} className="Button_rules">
        Rules
      </button>
      <picture ref={containerRef} className="Rules_container">
        <div>
          <header>
            <h2>Rules</h2>
            <button className="Button_header" onClick={handleChecked}>
              X
            </button>
          </header>
          <picture>
            <img src={RulesIMG} alt="" />
          </picture>
        </div>
      </picture>
    </footer>
  );
};

export default Rules;
