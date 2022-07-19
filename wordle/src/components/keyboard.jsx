import { BackspaceOutlined } from '@mui/icons-material';
import React from 'react'
import { useEffect } from 'react';
import Key from './Key';

export default function Keyboard() {
     const keys1 = ["Q","W","E","R","T","Y","U","I","O","P"];
     const keys2 =["A","S","D","F","G","H","j","K","L"];
     const keys3 =["Z","X","C","V","B","N","M"]; 

  useEffect(
    ()
  )

  return (
    <div className='keyboard mx-auto text-white'>
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

