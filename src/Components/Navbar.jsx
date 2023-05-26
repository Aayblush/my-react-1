import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div><h1>React Books App</h1></div>
      <div>
        <Link to="/favorites"><p>Your Favorites</p></Link>
      </div>
    </div>
  )
}

export default Navbar
