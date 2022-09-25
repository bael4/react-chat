import React from 'react'

const NavBar = () => {
  return (
    <div className='navbar'>
    <span className='logo'>My Chat</span>
    <div className='user'>
     <img src='https://avatars.githubusercontent.com/u/109285000?v=4' alt='user'/> 
     <span>Bael</span>
     <button>Logout</button>
    </div>
    </div>
  )
}

export default NavBar