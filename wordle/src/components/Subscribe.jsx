import { Cancel } from '@mui/icons-material'
import React from 'react'
import { useContext } from 'react'
import { AppContext } from './App'

function Subscribe() {
    const {cancel} = useContext(AppContext)
  return (
    <div className='subscribe text-white'> 
    <div className="cancel" onClick={cancel}><Cancel fontSize='medium'/></div>
        <form action="" className='form-sub mt-3 mb-5'>
            <input type="email" placeholder='Email' className='form-input m-1 mt-5 p-2' required/>
            <br />
        <button type="submit" className='sub-btn p-2 '>Subscribe</button>
        </form>
       <div className="container text-center">
            <p>we will love to update you on eveything going on, on this movement. </p>
            <hr />
            <p></p>
            <p>Subsrcibe to our newsletter</p>

            {/* fixed components in terms of design */}
            <div className="box box1"></div>
            <div className="box box2"></div>
            <div className="box box3"></div>
       </div>
       
    </div>
  )
}

export default Subscribe