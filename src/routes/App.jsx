import React from "react";
import Score from "../components/Score";
import Rules from "../components/Rules";
import Choose from "../containers/Choose";
import "../styles/Variables.scss";

const App = () => {
  return (
    <div className="App">
      <Score />
      <Choose />
      <Rules />
    </div>
  );
};

export default App;
