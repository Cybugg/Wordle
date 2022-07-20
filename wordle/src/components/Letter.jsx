import React,{useContext} from 'react'
import { AppContext } from './App'
import { useEffect } from 'react';

function Letter({letterPos,attemptVal}) {

  // importing the states from context made available to this component
  // (declarations)
  const  {board,correctWord,currAttempt,disabledLetters,setDisabledLetters} = useContext(AppContext)
  const letter = board[attemptVal][letterPos]; 

  // variables testing correctness of a letter
  const correct = correctWord[letterPos] === letter
  const almost = !correct && letter !== '' && correctWord.includes(letter)
  const letterState =  currAttempt.attempt > attemptVal && (correct? "correct":almost?"almost":"error")

  useEffect(
    ()=>{
if(letter !== "" && !correct && !almost){
setDisabledLetters(prev => [...prev,letter])
}
    },[currAttempt.attempt]
  );
  return (
    <div className={`letter text-white ${letter !== "" && "active"}`} id={letterState}>{letter}</div>
  )
}

export default Letter