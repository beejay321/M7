import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import Search from "./components/Search";
import Home from "./components/Home";
import CompanyDetail from "./components/CompanyDetail";
import Favorites from "./components/Favorites";

import React from "react";
// import { Container, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

class App extends React.Component {
  

  
  render() {
    return (
      <Router className="App">
        <NavBar />
        <Route component={Home} path="/" exact />

        {/* <Route path="/" exact render={(routerProps) => <Home {...routerProps}  />} /> */}
        <Route component={Favorites} path="/favorites" />
        <Route path="/companyDetail/:companyName" render={(routerProps) => <CompanyDetail {...routerProps}  />} />
      </Router>
    );
  }
}

export default App;

// function App() {
//   return (
//     <Router className="App">
//       <NavBar />
//       <Route component={Home} path="/" exact />
//       <Route component={Search} path="/search/:query" />
//       <Route component={CompanyDetail} path="/companyDetail" />
//     </Router>
//   );
// }

// export default App;
