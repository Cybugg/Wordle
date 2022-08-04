import { Twitter } from '@mui/icons-material'
import { GitHub } from '@mui/icons-material'
import { LinkedIn } from '@mui/icons-material'
import { Cancel } from '@mui/icons-material'
import { Switch } from '@mui/material'
import React from 'react'
import { useContext } from 'react'
import { AppContext } from './App'
import { ClickAwayListener } from "@mui/material";
import InputName from './inputName'
import ConfirmOrCancel from './ConfirmOrCancel'
import ConfirmReset from './confirmReset'

function Settings() {
    const date = new Date()
    let year = date.getFullYear()

    const {displayHow,cancel,displaySettings,darkTheme,switchdarkTheme,userName,bypass,reset,handleOnChange,inputName,confirmName,editUserName,editName,cancelChangeName,resetprev,confirmReset,cancelReset} = useContext(AppContext)
  return (
    <div className={`settings  text-white ${displaySettings && "display"}`}>
       {resetprev && <ConfirmReset confirm={confirmReset} cancel={cancelReset}/>}
        <div className={`settings-inner container-fluid pt-3  ${darkTheme? "":"genLightMode"}`} onClick={bypass}>
        <div className="cancel text-right" onClick={cancel}><Cancel fontSize='medium'/></div>
        <h6 className='text-center fw-bold pb-3'>SETTINGS</h6>
        
        {editUserName?    <div className="settings-options">
      <div className="option">
          <InputName value={inputName} handleOnChange={handleOnChange}/>
      </div>
      <div className="option">
      <ConfirmOrCancel confirm={confirmName} cancel={cancelChangeName}/>
      </div>
        </div>:<div className="settings-options">
      <div className="option">
          <h5>Set Username</h5>
          <div className="copywright">{userName}</div>
      </div>
      <div className="option">
      <button className="setName" onClick={editName}>edit</button>
      </div>
        </div>
    }
        
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
         <button className='del-btn' onClick={reset}>reset</button>
      </div>
        </div>
        <hr />
        <div className=" d-flex">
            <div className='m-1'><a href="https://twitter.com/Iam_samkez" className={darkTheme?'text-white':'text-dark'}><Twitter /></a></div>
            <div className='m-1'><a href="" className={darkTheme?'text-white':'text-dark'}><GitHub /></a></div>
            <div className='m-1'><a href="" className={darkTheme?'text-white':'text-dark'}><LinkedIn /></a></div>
        </div>
        <div className="text-end copywright h6">
        &copy;Cybug Technologies, {year}
    </div>
        </div>
    </div>
  )
}

export default Settings