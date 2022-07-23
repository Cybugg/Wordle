import { Cancel } from '@mui/icons-material'
import { Settings } from '@mui/icons-material'
import { Person } from '@mui/icons-material'
import { Rating } from '@mui/material'
import React from 'react'
import { useContext } from 'react'
import { AppContext } from './App'
import ScoreItem from './ScoreItem'

function Statistics() {
    const {darkTheme,cancel,stats,openSettings,userName} = useContext(AppContext)
  return (
    <div className={`stat ${stats && "display"}`}>
    <div className={`container-fluid p-3 stat-details  ${darkTheme? "":"genLightMode"}`} onClick={(e)=>e.stopPropagation()}>
    <div className="cancel text-right" onClick={cancel}><Cancel  fontSize='medium'/></div>
        <div className="profile p-1">
            {/* supposed display icon */}
            <span className="icon"><Person sx={{border:"2px solid white",borderRadius:"50px"}}/></span>
             {/* supposed username */}
        <span className="profile-name p-1">{userName}</span>
        </div>
        <div className="scores container ps-5 pe-5">
            <ScoreItem digit={0} label={"Played"} />
            <ScoreItem digit={0} label={"Won"} />
            <ScoreItem digit={0} label={"Xp"} />
        </div>
        <div className="rating p-5 pt-2 pb-2">
            <p>Rating:</p>
        <Rating name="half-rating-read" value={5} readOnly size='large'precision={0.5} color='primary'/> <p className="score-label">5/5</p>
         <p>You are killing it!!!</p>
        </div>
       
 <div className="text-end copywright text-decoration-underline" onClick={openSettings}
    ><Settings /> Settings</div>
    </div>
 </div>

  )
}

export default Statistics