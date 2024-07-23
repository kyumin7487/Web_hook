import './App.css';
import React, { useState, useEffect} from "react";

function App() {
  const sayHello = () => {
    console.log("안녕해준")
  }
  useEffect(() => {
    sayHello();
  })
  return (
    <div className="App">
    </div>
  );
}

export default App;
