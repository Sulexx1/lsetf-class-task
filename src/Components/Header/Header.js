import React from 'react'
import './Header.css'
import Profile from '../image/profile2.png'

function Header() {
  return (
      <>
    <div className='mrheader'>
        <div className='mrheaderholder'>
            <div><img src={Profile} className='imageprofile' /></div>
            <div className='TextHolder'>
                <p>Home</p>
                <p>Service</p>
                <p>Contact</p>
                <p>About</p>
            </div>
        </div>
    </div>
    </>
  )
}

export default Header