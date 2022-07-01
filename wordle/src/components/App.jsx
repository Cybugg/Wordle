import React from "react";
import Keyboard from "./keyboard";
import Header from "./Header";
import Board from "./board"

function App() {
  return (
    <div className="wordCrack">
      <Header />
      <Board />
      <Keyboard />
    </div>
  )
}

export default App;
