import React from "react";
import "./App.scss";
import HomePage from './sections'
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Route path="/" component={HomePage}></Route>
    </Router>
  );
}

export default App;
