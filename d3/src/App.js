import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import CompanyDetail from "./components/CompanyDetail";
import Favorites from "./components/Favorites";
import React from "react";
class App extends React.Component {
  render() {
    return (
      <Router className="App">
        <NavBar />
        <Route component={Home} path="/" exact />
        <Route component={Favorites} path="/favorites" />
        <Route path="/companyDetail/:companyName" render={(routerProps) => <CompanyDetail {...routerProps} />} />
      </Router>
    );
  }
}

export default App;
