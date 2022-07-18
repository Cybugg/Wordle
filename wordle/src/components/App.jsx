import React from "react";
import Keyboard from "./keyboard";
import Header from "./Header";
import Board from "./board"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { createContext } from "react";
import { boardDefault } from "./word";
import { useState } from "react";

export const AppContext = createContext()
function App() {
  const [board,setBoard] = useState(boardDefault);
  return (
  
    <div className="wordCrack">
      <Header />
<AppContext.Provider >
    <Board />
    <Keyboard />
    </AppContext.Provider>
    

    </div>
  )
}

export default App;
