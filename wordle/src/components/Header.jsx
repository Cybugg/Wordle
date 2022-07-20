import React from "react";
import MenuIcon from '@mui/icons-material/Menu';
import HelpIcon from '@mui/icons-material/Help';
import StackedBarChartIcon from '@mui/icons-material/StackedBarChart';
import SettingsIcon from '@mui/icons-material/Settings';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import BarChartRoundedIcon from '@mui/icons-material/BarChartRounded';
import { useContext } from "react";
import { AppContext } from "./App";

export default function Header(){
const {openHowtoPlay} = useContext(AppContext)

    return(
        <div className="header">
        <div className="headerComponent sideNav"><MenuIcon sx={{padding:"1px",fontSize:"30px",fontWeight:"bolder"}} /><div onClick={openHowtoPlay}><QuestionMarkIcon sx={{padding:"1px",border:"2px solid var(--lightGray)",borderRadius:"50%",fontSize:"20px",margin:"6px"}} /></div></div>
        <div className="headerComponent title"><a href="">Word Crack</a> </div>
        <div className="headerComponent sideNav"><BarChartRoundedIcon sx={{padding:"3px",fontSize:"30px"}}/><SettingsIcon sx={{padding:"3px",fontSize:"30px"}}/></div>
      </div>
    )
}