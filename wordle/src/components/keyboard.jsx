import React from 'react'
import { useContext } from 'react';
import { useCallback } from 'react';
import { useEffect } from 'react';
import { AppContext } from './App';
import Key from './Key';

export default function Keyboard() {

    const {onSelectLetter,onDelete,onEnter} = useContext(AppContext)

     const keys1 = ["Q","W","E","R","T","Y","U","I","O","P"];
     const keys2 =["A","S","D","F","G","H","j","K","L"];
     const keys3 =["Z","X","C","V","B","N","M"]; 
const handlekeyboard = useCallback(
  (e)=>{
    if (e.key ==="Enter"){
       onEnter()
    }
    else if(e.key === "Backspace"){
       onDelete()
    }
    else{
      keys1.map(
        ele =>{ if(e.key === ele){
      onSelectLetter()
        }})
      keys2.map(
        ele =>{ if(e.key === ele){
      onSelectLetter()
        }})
      keys3.map(
        ele =>{ if(e.key === ele){
      onSelectLetter()
        }})
    }
  }
)
  useEffect(
    ()=>{
      document.addEventListener("keydown",handlekeyboard);
      return ()=>{
        document.removeEventListener("keydown",handlekeyboard);
      }
    },[handlekeyboard]
  )

  return (
    <div className='keyboard mx-auto text-white' onKeyDown={handlekeyboard}>
      <div className="line1 d-flex">{keys1.map(
        key => <Key keyVal={key} />
      )}</div>
      <div className="line2 d-flex">{keys2.map(
        key => <Key keyVal={key} />
      )}
      </div>
      <div className="line3 d-flex">
        <Key keyVal={"ENTER"} bigKey={true}/>
        {keys3.map(
          key => <Key keyVal={key} />
        )
        }
        <Key keyVal={"DELETE"} bigKey={true}/>
      </div>
      </div>
  )
}

