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
const {openHowtoPlay,openSettings,darkTheme} = useContext(AppContext)

    return(
        <div className={`header p-1 ${darkTheme?"":"bg-white text-dark"}`}>
        <div className="headerComponent sideNav"><MenuIcon sx={{padding:"1px",fontSize:"30px",fontWeight:"bolder"}} fontSize='large'/><div onClick={openHowtoPlay}><QuestionMarkIcon sx={{padding:"1px",border:`2px solid  ${darkTheme?"var(--lightGray)":"var(--black)"}`,borderRadius:"50%",fontSize:"20px",margin:"6px"}} fontSize='large'/></div></div>
        <div className={`headerComponent title`}><a href="" className={`${darkTheme?"":"text-dark"}`}><span className="success">W</span>ord <span className="warning">C</span>rack</a> </div>
        <div className="headerComponent sideNav"><BarChartRoundedIcon fontSize='large' sx={{padding:"3px",fontSize:"30px"}}/>
        <div onClick={openSettings}><SettingsIcon sx={{padding:"3px",fontSize:"30px"}} fontSize='large'/></div> </div>
      </div>
    )
}