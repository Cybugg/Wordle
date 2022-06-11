import React from "react";
import MenuIcon from '@mui/icons-material/Menu';
import HelpIcon from '@mui/icons-material/Help';
import StackedBarChartIcon from '@mui/icons-material/StackedBarChart';
import SettingsIcon from '@mui/icons-material/Settings';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import BarChartRoundedIcon from '@mui/icons-material/BarChartRounded';
export default function Header(){
    return(
        <div className="header">
        <div className="headerComponent sideNav"><MenuIcon sx={{padding:"3px",fontSize:"32px",fontWeight:"bolder"}} /><QuestionMarkIcon sx={{padding:"1px",border:"2px solid white",borderRadius:"50%",fontSize:"13px",margin:"6px"}}/></div>
        <div className="headerComponent title"><a href="">Word Crack</a> </div>
        <div className="headerComponent sideNav"><BarChartRoundedIcon sx={{padding:"3px",fontSize:"25px"}}/><SettingsIcon sx={{padding:"3px",fontSize:"25px"}}/></div>
      </div>
    )
}