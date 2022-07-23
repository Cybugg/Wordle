import React from 'react'
import { useContext } from 'react'
import { AppContext } from './App'
function GameOver() {
    const {gameOver,setgameOver,currAttempt,correctWord,darkTheme,playAgain} = useContext(AppContext)
  return (
    <div className={`gameover ${darkTheme === false && "genLightMode"}`}>
        <h3>{gameOver.guessedWord? "Word Cracked Succesfully":"You failed to Crack The Word..."}</h3>
        <h3>Correct Word: <span className='text-decoration-underline'>{correctWord.toLowerCase()}</span></h3>
        <span className="score-font">
             {gameOver.guessedWord && (<h3>you earned {7 - currAttempt.attempt }xp</h3>)}
        </span>
       <div className="playAgain p-2 fw-bold mt-2" id='correct' onClick={playAgain}>Next Game {">"}</div>
        
    </div>
  )
}

export default GameOver