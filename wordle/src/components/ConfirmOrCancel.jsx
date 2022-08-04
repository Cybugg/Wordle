import React from 'react'

function ConfirmOrCancel({confirm,cancel}) {
  return (
    <div className='confirm'>
        <button className='setName bg-success text-white me-1' onClick={confirm}>confirm</button>
        <button className='setName' onClick={cancel}>cancel</button>
    </div>
  )
}

export default ConfirmOrCancel