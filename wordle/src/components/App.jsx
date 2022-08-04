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
import Settings from "./Settings";
import Subscribe from "./Subscribe";
import Statistics from "./Statistics";
import commentary from "./Commentary"
import { ClickAwayListener } from "@mui/material";
import { WindowSharp } from "@mui/icons-material";

export const AppContext = createContext()
function App() {
  // Declarations
  const initialBoard = boardDefault
  const [board,setBoard] = useState(initialBoard);
  const [currAttempt,setCurrAttempt] = useState({attempt:0,letterPos:0})
  const [wordset,setWordSet] = useState(new Set())
  const [disabledLetters,setDisabledLetters] = useState([])
  const [gameOver,setGameOver] = useState({gameOver:false,guessedWord:false})
  const [correctWord,setCorrectWord] = useState("")
  const [displayHow,setDisplayHow] = useState(false)
  const [displaySettings,setDisplaySettings] = useState(false)
  const [darkTheme,setdarkTheme] = useState(true)
  const [refresh,setRefresh] = useState(0)
  const [menu,setMenu] = useState(false)
  const [stats,setStats] = useState(false)
  const [userName,setUserName] = useState("player")
  const [inputName,setinputUserName] = useState("")
  const [editUserName,setEditUserName] = useState(false)
  const [timesPlayed,setTimePlayed] = useState(0)
  const [score,setSCore] = useState(100)
  const [timesWon,setTimesWon] = useState(0)
  const [resetprev,setResetprev] = useState(false)
// I want this to happen just once
  useEffect(
    ()=> {generateWordSet(Word).then(words=>{
        setWordSet(words["wordSet"]);
        setCorrectWord(words["todaysWord"].toUpperCase())
    })}
,[refresh]);

// load state
useEffect(
  ()=>{
    const loadState = JSON.parse(localStorage.getItem("state"))
    if(loadState !== null){
       setSCore(loadState.score)
    setTimePlayed(loadState.timesPlayed)
    setUserName(loadState.userName)
    setTimesWon(loadState.timesWon)
    setdarkTheme(loadState.darkTheme)
    }
  },[]
)

// save State
useEffect(
  ()=>{
    localStorage.setItem("state",JSON.stringify({userName:userName,timesPlayed:timesPlayed,score:score,timesWon:timesWon,darkTheme:darkTheme}))
  },[score,timesPlayed,userName,darkTheme]
)
// handleChange
const handleOnChange = (e)=>{
const newVal = e.target.value
setinputUserName(newVal)
}
// propagation stop
const bypass = (e)=>{
  // does nothing for now
return;
}
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
// confirm name
const confirmName = ()=>{
  setUserName(inputName)
  setEditUserName(false)
}
// cancel renaming
const cancelChangeName = ()=>{
  setEditUserName(false)
}
// edit name
const editName = ()=>{
  setEditUserName(true)
}
const confirmReset = ()=>{
const confirm= confirm("Are you sure you want to reset your score records?")
  confirm()
  if(confirm){
  setSCore(100)
  setTimePlayed(0)
  setTimesWon(0)
  alert("Reset Completed Successsfully")
  }
  else{
    alert(
      "reset cancelled"
    )
  }
  setResetprev(false)
}
// cancel reset
const cancelReset = ()=>{
  setResetprev(false)
}
// reset all data
const reset = ()=>{
  setResetprev(true)
}
// score process


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
 setTimePlayed(state=>state+1)
 setTimesWon(state => state + 1)
setSCore(state => state + (6 - currAttempt["attempt"]))
}
// if user failed to guess the word
if(currAttempt.attempt > 5){
  setGameOver({gameOver:true,guessedWord:false})
  setTimePlayed(state=>state+1)
  setSCore(state => state - 2)
}
// normal proceed function
if(wordset.has(currWord.toLowerCase()+"\r")){
setCurrAttempt(
  state => {return({...state,attempt:state.attempt+1,letterPos:0})}
)

}
else{
  alert("Please use english word");
}
}  

// cancels all opened fixed components
const cancel = ()=>{
  setDisplayHow(false)
  setDisplaySettings(false)
  setMenu(false)
  setStats(false)
}
//  function to open stat
const openStat = (e)=>{
 
  cancel()
  setStats(true)
}
//  function to open how to play game
const openHowtoPlay = ()=>{
  cancel()
  setDisplayHow(true)
}
// function to open settings
const openSettings = (e)=>{
 
  cancel()
  setDisplaySettings(true)
}
// function to open menu
const openMenu = (e)=>{
 
  cancel()
setMenu(!menu)
}

// switches
const switchdarkTheme = ()=>{
  setdarkTheme(!darkTheme)
}

// play again function
const freshBoard = [["","","","",""],["","","","",""],["","","","",""],["","","","",""],["","","","",""],["","","","",""]]
const playAgain = ()=>{
  setCurrAttempt({attempt:0,letterPos:0})
  setGameOver({gameOver:false,guessedWord:false})
  setRefresh(refresh + 1)
  setBoard(freshBoard)
  setDisabledLetters([])
}

useEffect(
  (e)=>{setTimeout(
  openHowtoPlay,1200
)},[]
)


  return (
  
    <div className={`wordCrack ${darkTheme?"":"bg-white"} `}> 
<AppContext.Provider value={{board,setBoard,currAttempt,setCurrAttempt,onEnter,onSelectLetter,onDelete,correctWord,disabledLetters,setDisabledLetters,gameOver,setGameOver,displayHow,setDisplayHow,cancel,openHowtoPlay,displaySettings,setDisplaySettings,openSettings,darkTheme,setdarkTheme,switchdarkTheme,playAgain,openMenu,menu,setStats,stats,openStat,userName,setUserName,bypass,userName,setUserName,timesPlayed,setTimePlayed,score,setSCore,timesWon,setTimesWon,reset,editUserName,setEditUserName,handleOnChange,inputName,confirmName,cancelChangeName,editName,confirmReset,cancelReset,resetprev}}>
  {/* Edit and instruction components */}
 

<Header />
<Subscribe />
<Howtoplay />
<Statistics />
<Settings />
  {/* main game component */}
  <main className="container-fluid">
     <Board />
   { gameOver.gameOver?<GameOver /> : <Keyboard />}
   </main> 
   </AppContext.Provider>
  
   
    </div>
  )
}

export default App;
