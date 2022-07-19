import React, {useContext} from 'react'
import { AppContext } from './App'



function Key({keyVal,bigKey}) {
    const {board,setBoard,currAttempt,setCurrAttempt} = useContext(AppContext) 
const selectLetter = ()=>{
    if (keyVal = "ENTER"){
        if(currAttempt.letterPos !==5){
    return;
}
setCurrAttempt(
    state => {return({...state,attempt:state.attempt+1,letterPos:0})}
)}
    else if(keyVal === "DELETE"){

    }
else{
    const newboard = [...board]
    newboard[currAttempt.attempt][currAttempt.letterPos] = keyVal
    setBoard(
        newboard
    )
setCurrAttempt(state =>{
if(state.letterPos === 4){
    return state
}
return({...state,letterPos:state.letterPos+1})
})
} 
    }
   

  return (
    <div className={`key ${bigKey && "bigKey"}`} onClick={selectLetter}>
        {keyVal}</div>
  )
}

export default Key