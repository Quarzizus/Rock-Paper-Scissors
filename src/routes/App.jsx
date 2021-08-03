import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Score from "../components/Score";
import Rules from "../components/Rules";
import Choose from "../containers/Choose";
import "../styles/Variables.scss";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Score />
        <Switch>
          <Route exact path="/" component={Choose} />
        </Switch>
        <Rules />
      </div>
    </BrowserRouter>
  );
};

export default App;
