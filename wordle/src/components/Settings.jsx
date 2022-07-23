import { Twitter } from '@mui/icons-material'
import { GitHub } from '@mui/icons-material'
import { LinkedIn } from '@mui/icons-material'
import { Cancel } from '@mui/icons-material'
import { Switch } from '@mui/material'
import React from 'react'
import { useContext } from 'react'
import { AppContext } from './App'
import { ClickAwayListener } from "@mui/material";

function Settings() {
    const date = new Date()
    let year = date.getFullYear()

    const {displayHow,cancel,displaySettings,darkTheme,switchdarkTheme,userName} = useContext(AppContext)
  return (
    <div className={`settings  text-white ${displaySettings && "display"}`}>
        <ClickAwayListener onClickAway={cancel} >
        <div className={`settings-inner container-fluid pt-3  ${darkTheme? "":"genLightMode"}`} onClick={(e)=>e.stopPropagation()}>
        <div className="cancel text-right" onClick={cancel}><Cancel fontSize='medium'/></div>
        <h6 className='text-center fw-bold pb-3'>SETTINGS</h6>
        <div className="settings-options">
      <div className="option">
          <h5>Set Username</h5>
          <div className="copywright">{userName}</div>
      </div>
      <div className="option">
      <button className="setName">edit</button>
      </div>
        </div>
        <hr />
        <div className="settings-options">
      <div className="option">
          <h5>Dark Theme</h5>
      </div>
      <div className="option">
      <Switch checked={darkTheme} color="success" size='large' onChange={switchdarkTheme}/>
      </div>
        </div>
        <hr />
        <div className="settings-options">
        <div className="option">
          <h5>Feedback</h5>
      </div>
        <div className="option">
         <a href="mailto:oguntimehinsamuel1@gmail.com" className='copywright h5'>Email</a>
      </div>
        </div>
        <hr />
        <div className="settings-options">
        <div className="option">
          <h5>Community</h5>
      </div>
        <div className="option">
          <a href="https://twitter.com/Iam_samkez" className='copywright h5'>Twitter</a>
      </div>
        </div>
        <hr />
        <div className="settings-options">
        <div className="option">
          <h5>Questions?</h5>
      </div>
        <div className="option">
         <a href="" className='copywright h5'>FAQS</a>
      </div>
        </div>
        <hr />
        <div className="settings-options" id='delete'>
        <div className="option">
          <h5>Reset Score</h5>
          <div className="copywright" id='delete'>All previous data on your scores will be deleted.</div>
      </div>
        <div className="option">
         <button className='del-btn'>reset</button>
      </div>
        </div>
        <hr />
        <div className=" d-flex">
            <div className='m-1'><a href="" className={darkTheme?'text-white':'text-dark'}><Twitter /></a></div>
            <div className='m-1'><a href="" className={darkTheme?'text-white':'text-dark'}><GitHub /></a></div>
            <div className='m-1'><a href="" className={darkTheme?'text-white':'text-dark'}><LinkedIn /></a></div>
        </div>
        <div className="text-end copywright">
        &copy;Cybug Technologies, {year}
    </div>
        </div>
        </ClickAwayListener>
    </div>
  )
}

export default Settings