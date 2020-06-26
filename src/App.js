import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Leaderboard from "./pages/Leaderboard";

function App() {
  return (
    <div className="App">
      <p>Hello World !</p>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/leaderboard" component={Leaderboard} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </div>
  );
}

export default App;
