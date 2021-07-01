import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Search from "./components/Search";
import NavBar from "./components/NavBar";
import Details from "./components/Detail";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Route component={Search} path="/" exact />
        <Route component={Details} path="/Detail" />
        {/* <Route path="/Detail" render={() => <Details title ="Detail" />} /> */}
      </Router>
    </>
  );
}

export default App;
