import React from "react";
import { BrowserRouter as Router,Route, Switch } from "react-router-dom";
import LogIn from "../src/Components/Index/Index";
import Index from "./Components/LogIn/Index";

import './index.css';

function App() {
  return (
    <Router>
    <main className="main-app">
      <Switch>
        <Route exact component={Index} path="/" />
        <Route  component={LogIn} path="/Login" />
      </Switch>
    </main>
  </Router>
  );
}

export default App;
