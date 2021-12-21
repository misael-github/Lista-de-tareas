import React  from 'react';
import "../src/App.scss";
// Hook de react que nos da una variable y una función para modificar esa variable
// import {useState} from "react"
import Container from "./components/Container";


function App() {

  return (
    <div className="App">
      <h1>Tasks list</h1>

    <Container/>
    
    </div>
  );
}

export default App;
