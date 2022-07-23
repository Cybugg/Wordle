import { BarChartRounded } from '@mui/icons-material'
import { Cancel } from '@mui/icons-material'
import { Book } from '@mui/icons-material'
import React from 'react'
import { useContext } from 'react'
import { AppContext } from './App'
import { ClickAwayListener } from "@mui/material";

const date = new Date()
let year = date.getFullYear()

function Howtoplay() {
    const {displayHow,cancel,darkTheme} = useContext(AppContext)
  return (
      <div className={`howtoplay ${displayHow && "display"}`}>
          {/* Note Click away listener can just be in only a component, e.stopPropagation() in all other components will make the m clickable */}
          <ClickAwayListener onClickAway={cancel}>
          <div className={`container-fluid p-3 intructions  ${darkTheme? "":"genLightMode"}`} onClick={(e)=>e.stopPropagation()}>
             <div className="cancel text-right" onClick={cancel}><Cancel  fontSize='medium'/></div>
        <h6 className='fw-bold text-center pb-1'>HOW TO PLAY</h6>
        <p>Crack the <span className="fw-bold">WORD</span> in six tries</p>
        <p>Each guess must be a valid five-letter word. Hit the enter button to submit.</p>
        <p>After each guess, the color of the tiles will change to show how close your guess was to the word.</p>
        <hr />
        <p>Examples</p>
        {/* first example */}
        <div className="example d-flex mb-2">
        <div className='letter active ' id='correct'>W</div>
        <div className='letter active'>E</div>
        <div className='letter active'>A</div >
        <div className='letter active'>R</div >
        <div className='letter active'>Y</div>
        </div>
        <p>The letter <span className='fw-bold'>W</span> is in the word and in the correct spot.</p>
        {/* second exampple */}
        <div className="example d-flex mb-2">
        <div className='letter active'>P</div>
        <div className='letter active' id='almost'>I</div>
        <div className='letter active'>L</div >
        <div className='letter active'>L</div >
        <div className='letter active'>S</div>
        </div>
        <p>The letter <span className='fw-bold'>I</span> is in the word but in the wrong spot.</p>
        {/* third exampple */}
        <div className="example d-flex mb-2">
        <div className='letter active'>V</div>
        <div className='letter active'>A</div>
        <div className='letter active'>G</div >
        <div className='letter active' id='error'>U</div >
        <div className='letter active'>E</div>
        </div>
        <p>The letter <span className='fw-bold'>U</span> is not in the word in any spot.</p>
        <hr />
        <p className="fw-bold">
           <BarChartRounded /> You can check your score records and perfomance by clicking the stat icon.
        </p>
        <p className="fw-bold">
            Unlike the original Wordle game you can play over and over again in a day.
        </p>
        <p className="fw-bold border-bottom pb-4">
           You can use this app for entertainment and educational purposes.
        </p>
        <p><Book/> Inspired by The New York Times games</p>
        <div className="text-end copywright">
        &copy;Cybug Technologies, {year}
    </div>
    </div> 
          </ClickAwayListener>
      </div>
    
  )
}

export default Howtoplay