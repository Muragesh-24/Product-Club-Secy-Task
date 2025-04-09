import React, { useState } from 'react'
import './Navbar.css'

function Navbar({ tasks, setTasks }) {


  return (
    <div className='nav'>
      <div className='logo'>✅ ToDo Hero</div>
      <div className='quote'>
        “The secret of getting ahead is getting started.” – Mark Twain
      </div>

    </div>
  )
}

export default Navbar
