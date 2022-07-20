import React from 'react'
import { useContext } from 'react'
import { AppContext } from './App'

function GameOver() {
    const {gameOver,setgameOver} = useContext(AppContext)
  return (
    <div>GameOve</div>
  )
}

export default GameOver