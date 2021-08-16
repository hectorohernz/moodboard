import React from "react";
import { BrowserRouter as Router,Route, Switch } from "react-router-dom";
import Index from "../src/Components/Index/Index";
import './index.css';

function App() {
  return (
    <Router>
    <main className="main-app">
      <Switch>
        <Route exact component={Index} path="/" />
      </Switch>
    </main>
  </Router>
  );
}

export default App;
