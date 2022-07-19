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
  const [currAttempt,setCurrAttempt] = useState({attempt:0,letterPos:0})

const onSelectLetter = (keyVal)=>{
  // All other key Actions
    const newboard = [...board]
    newboard[currAttempt.attempt][currAttempt.letterPos] = keyVal
    setBoard(newboard)
    if(currAttempt.letterPos <= 4){
      setCurrAttempt(state =>{
return({...state,letterPos:state.letterPos+1})
})} 
} 

const onDelete = ()=>{
  // Delete Action
  
    if(currAttempt.letterPos === 0){
return;
}
    const newboard = [...board]
    newboard[currAttempt.attempt][currAttempt.letterPos-1] = "";
    
    setBoard(newboard)
    setCurrAttempt(state => {return({...state,letterPos:state.letterPos-1})})
}  
const onEnter = ()=>{
    // Enter Action
if(currAttempt.letterPos !== 4){return;
}
setCurrAttempt(
  state => {return({...state,attempt:state.attempt+1,letterPos:0})}
)
}  


  return (
  
    <div className="wordCrack">
      <Header />
<AppContext.Provider value={{board,setBoard,currAttempt,setCurrAttempt,onEnter,onSelectLetter,onDelete}}>
  <main>
    <Board />
    <Keyboard />
  </main>
    </AppContext.Provider>
    

    </div>
  )
}

export default App;
