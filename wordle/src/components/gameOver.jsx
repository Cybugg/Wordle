import React from 'react'
import { useContext } from 'react'
import { AppContext } from './App'
function GameOver() {
    const {gameOver,setgameOver,currAttempt,correctWord} = useContext(AppContext)
  return (
    <div className='gameover'>
        <h2>{gameOver.guessedWord? "Word Cracked Succesfully":"You failed to Crack The Word"}</h2>
        <h2>Correct Word: {correctWord.toLowerCase()}</h2>
        {gameOver.guessedWord && (<h2>Score: {7 - currAttempt.attempt } points</h2>)}
        
    </div>
  )
}

export default GameOver