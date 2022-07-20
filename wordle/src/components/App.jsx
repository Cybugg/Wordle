import React from "react";
import Keyboard from "./keyboard";
import Header from "./Header";
import Board from "./board"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { createContext } from "react";
import { boardDefault ,generateWordSet} from "./word";
import { useState } from "react";
import { useEffect } from "react";
import Word from '../Bank.txt'
import GameOver from "./gameOver";
import Howtoplay from "./Howtoplay";



export const AppContext = createContext()
function App() {
  // Declarations
  const [board,setBoard] = useState(boardDefault);
  const [currAttempt,setCurrAttempt] = useState({attempt:0,letterPos:0})
  const [wordset,setWordSet] = useState(new Set())
  const [disabledLetters,setDisabledLetters] = useState([])
  const [gameOver,setGameOver] = useState({gameOver:false,guessedWord:false})
  const [correctWord,setCorrectWord] = useState("")
  const [displayHow,setDisplayHow] = useState(false)

// I want this to happen just once
  useEffect(
    ()=> {generateWordSet(Word).then(words=>{
      console.log(words)
  setWordSet(words["wordSet"]);
  console.log(words["todaysWord"])
  setCorrectWord(words["todaysWord"].toUpperCase())
    })}
,[]);


// The correct word


// Actions
const onSelectLetter = (keyVal)=>{
  // All other key Actions
  if(currAttempt.letterPos > 4){
    return;
  }
    const newboard = [...board]
    newboard[currAttempt.attempt][currAttempt.letterPos] = keyVal
    setBoard(newboard)
    setCurrAttempt(state =>{
return({...state,letterPos:state.letterPos+1})
})
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
    if(currAttempt.letterPos !==5)return;
let currWord ="";
for(let i = 0;i < 5;i++){
  currWord += board[currAttempt.attempt][i]
}

// if user guessed the correct word
if(correctWord === currWord+"\r"){
  setGameOver(state =>( {gameOver:true,guessedWord:true}))
}
if(currAttempt.attempt === 5){
  setGameOver({gameOver:true,guessedWord:false})
}
if(wordset.has(currWord.toLowerCase()+"\r")){
setCurrAttempt(
  state => {return({...state,attempt:state.attempt+1,letterPos:0})}
)

}
else{
  alert("Please use real engligh word");
}
}  
//  function to open how to play game
const openHowtoPlay = ()=>{
  setDisplayHow(true)
}

// cancels all opened fixed components
const cancel = ()=>{
  setDisplayHow(false)
}


  return (
  
    <div className="wordCrack">
      
<AppContext.Provider value={{board,setBoard,currAttempt,setCurrAttempt,onEnter,onSelectLetter,onDelete,correctWord,disabledLetters,setDisabledLetters,gameOver,setGameOver,displayHow,setDisplayHow,cancel,openHowtoPlay}}>
<Header />
<Howtoplay />
  <main>
    <Board />
   { gameOver.gameOver?<GameOver /> : <Keyboard />}
  </main>
    </AppContext.Provider>
    </div>
  )
}

export default App;
