import React from 'react'

function ScoreItem({digit,label}) {
  return (
    <div className="score-item">
    <div className="digit">{digit}</div>  
    <p className='score-label'>{label}</p>
  </div>
  )
}

export default ScoreItem