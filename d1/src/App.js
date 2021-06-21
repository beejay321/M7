import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import Search from "./components/Search";
import Home from "./components/Home";
import CompanyDetail from "./components/CompanyDetail";

import React from "react";
// import { Container, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

class App extends React.Component {
  state = {
    jobs: [],
  };

  // componentDidMount = async () => {
  //   this.fetchData();
  // };

  componentDidMount = async () => {
    try {
      let response = await fetch("https://remotive.io/api/remote-jobs");
      //   console.log(response);
      if (response.ok) {
        let data = await response.json();
        console.log(data.jobs);
        this.setState({jobs: data.jobs});
      } else {
        this.setState({isError: true});
      }
    } catch (error) {
      this.setState({isError: true});
    }
  };

  //   componentDidUpdate = async (previousProps, previousState) => {
  //     if (previousProps.selectedMovie !== this.props.selectedMovie) {
  //       this.fetchData();
  //     }
  //   };

  render() {
    return (
      <Router className="App">
         {/* <NavBar /> */}
        <Route component={Home} path="/" exact />

        <Route component={Search} path="/search/:query" />
        <Route path="/companyDetail/:companyName" exact render={(routerProps) => <CompanyDetail  {...routerProps} 
        jobs ={this.state.jobs}
        />}
        />
      
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
