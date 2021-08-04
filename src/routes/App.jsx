import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Score from "../components/Score";
import Rules from "../components/Rules";
import Choose from "../containers/Choose";
import Success from "../containers/Success";
import "../styles/Variables.scss";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Score />
        <Switch>
          <Route exact path="/" component={Choose} />
          <Route exact path="/success" component={Success} />
        </Switch>
        <Rules />
      </div>
    </BrowserRouter>
  );
};

export default App;
