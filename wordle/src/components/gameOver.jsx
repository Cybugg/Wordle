import React from 'react'
import { useContext } from 'react'
import { AppContext } from './App'
function GameOver() {
    const {gameOver,setgameOver,currAttempt,correctWord} = useContext(AppContext)
  return (
    <div className='gameover'>
        <h3>{gameOver.guessedWord? "Word Succesfully Cracked":"You failed to Crack The Word"}</h3>
        <h2>Correct Word: {correctWord}</h2>
        {gameOver.guessedWord && (<h3>Score:{7 - currAttempt.attempt } points</h3>)}
        
    </div>
  )
}

export default GameOver