import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import logo from './logo.svg';
import './App.css';
import  Search  from "./components/Search";
import NavBar from './components/NavBar';

function App() {
  return (
    <>

      <NavBar/>
      <Search/>
    </>
  );
}

export default App;
