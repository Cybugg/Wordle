import { Cancel } from '@mui/icons-material'
import { Settings } from '@mui/icons-material'
import { Person } from '@mui/icons-material'
import { Rating } from '@mui/material'
import React from 'react'
import { useContext } from 'react'
import { AppContext } from './App'
import ScoreItem from './ScoreItem'
import {commentary} from './Commentary'

function Statistics() {
    const {darkTheme,cancel,stats,openSettings,userName,bypass,score,timesPlayed,timesWon} = useContext(AppContext)

   const excellentComment = commentary.excellent
   const veryGoodComment =commentary.veryGood
   const goodComment =commentary.good
   const badComment =commentary.bad

   function commentDecider(score,timesPlayed){
       if(timesPlayed === 0){
           return "Good Season to test your skills ^_^"
       }
if((score / timesPlayed)*5 === 5){
    return excellentComment[Math.floor(
        Math.random() * excellentComment.length
    )]
}
else if(4 <= (score / timesPlayed) < 5){
    return veryGoodComment[Math.floor(
        Math.random() * veryGoodComment.length
    )]
}
else if(3<=(score / timesPlayed)*5 < 4){
    return veryGoodComment[Math.floor(
        Math.random() * veryGoodComment.length
    )]
}
else if(2 <= (score / timesPlayed)*5 < 3){
    return goodComment[Math.floor(
        Math.random() * goodComment.length
    )]
}
else if((score / timesPlayed)*5 <=1){
    return badComment[Math.floor(
        Math.random() * badComment.length
    )]
}
else{
    return "indeterminate"
}
   }
   const comment = commentDecider(score,timesPlayed)

  return (
    <div className={`stat ${stats && "display"}`}>
    <div className={`container-fluid p-3 stat-details  ${darkTheme? "":"genLightMode"}`} onClick={bypass}>
    <div className="cancel text-right" onClick={cancel}><Cancel  fontSize='medium'/></div>
        <div className="profile p-1">
            {/* supposed display icon */}
            <span className="icon"><Person sx={{border:"2px solid white",borderRadius:"50px"}}/></span>
             {/* supposed username */}
        <span className="profile-name p-1">{userName}</span>
        </div>
        <div className="scores container ps-5 pe-5">
            <ScoreItem digit={timesPlayed} label={"Played"} />
            <ScoreItem digit={timesWon} label={"Won"} />
            <ScoreItem digit={score} label={"Rtp"} />
        </div>
        <div className="rating p-5 pt-2 pb-2">
            <p>Rating:</p>
        <Rating name="half-rating-read" value={timesPlayed!== 0 ?(score / (timesPlayed + 100))*5 : 0} readOnly size='large'precision={0.5} color='primary'/> <p className="score-label">{timesPlayed !== 0?((score / ((timesPlayed*6)+100))*5).toFixed(1):0}/5.0</p>
         <p>{comment}</p>
        </div>
       
 <div className="text-end copywright text-decoration-underline" onClick={openSettings}
    ><Settings /> Settings</div>
    </div>
 </div>

  )
}

export default Statistics