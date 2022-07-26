import React, {useContext} from 'react'
import { AppContext } from './App'



function Key({keyVal,bigKey,disabled}) {

    // getting states from context made availablle to the component
    const {onDelete,onSelectLetter,onEnter,darkTheme} = useContext(AppContext) 
const selectLetter = ()=>{
    if(keyVal === "ENTER"){
   return onEnter()
    }
    else if(keyVal==="DEL"){
   onDelete()
    }
    else{
        onSelectLetter(keyVal)
    }
}
   

  return (
    <div className={`key ${bigKey && "bigKey"} ${disabled && "disabled"} p-3`} onClick={selectLetter} id={darkTheme === false && "keyboardLightTheme"}>
        {keyVal}</div>
  )
}

export default Key