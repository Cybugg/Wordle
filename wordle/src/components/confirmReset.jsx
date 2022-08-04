import React from 'react'
import ConfirmOrCancel from './ConfirmOrCancel'

function ConfirmReset({confirm,cancel}) {
  return (
    <div className='confirm-reset'>
        <p>You are about to clear all your saved data</p>
        <ConfirmOrCancel confirm={confirm} cancel={cancel}/>
    </div>
  )
}

export default ConfirmReset