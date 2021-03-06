import React from "react";
import { BrowserRouter as Router,Route, Switch } from "react-router-dom";
import LogIn from "./Pages/LogIn/Index";
import Index from "./Pages/Index/Index";

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
