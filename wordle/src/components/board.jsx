import React from 'react'
import Letter from './Letter'


export default function Board() {
 
  return (
    <div className='board mt-2 mx-auto'>
<div className="roww">
  <Letter letterPos={0} attemptVal={0}/>
  <Letter letterPos={1} attemptVal={0}/>
  <Letter letterPos={2} attemptVal={0}/>
  <Letter letterPos={3} attemptVal={0}/>
  <Letter letterPos={4} attemptVal={0}/>
</div>
<div className="roww">
  <Letter letterPos={0} attemptVal={1}/>
  <Letter letterPos={1} attemptVal={1}/>
  <Letter letterPos={2} attemptVal={1}/>
  <Letter letterPos={3} attemptVal={1}/>
  <Letter letterPos={4} attemptVal={1}/>
</div>
<div className="roww">
  <Letter letterPos={0} attemptVal={2}/>
  <Letter letterPos={1} attemptVal={2}/>
  <Letter letterPos={2} attemptVal={2}/>
  <Letter letterPos={3} attemptVal={2}/>
  <Letter letterPos={4} attemptVal={2}/>
</div>
<div className="roww">
  <Letter letterPos={0} attemptVal={3}/>
  <Letter letterPos={1} attemptVal={3}/>
  <Letter letterPos={2} attemptVal={3}/>
  <Letter letterPos={3} attemptVal={3}/>
  <Letter letterPos={4} attemptVal={3}/>
</div>
<div className="roww">
  <Letter letterPos={0} attemptVal={4}/>
  <Letter letterPos={1} attemptVal={4}/>
  <Letter letterPos={2} attemptVal={4}/>
  <Letter letterPos={3} attemptVal={4}/>
  <Letter letterPos={4} attemptVal={4}/>
</div>
<div className="roww">
  <Letter letterPos={0} attemptVal={1}/>
  <Letter letterPos={1} attemptVal={1}/>
  <Letter letterPos={2} attemptVal={1}/>
  <Letter letterPos={3} attemptVal={1}/>
  <Letter letterPos={4} attemptVal={1}/>
</div>
 
    </div>
  )
}

