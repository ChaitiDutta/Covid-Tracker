import React from 'react'
import { useState } from 'react';
import { BsBookmarkCheck } from 'react-icons/bs';
import Tracker from './Tracker';
function Info({cartListedCity}) {
  const [isOpen, setIsOpen] = useState(false)

  const ClickBookMark =()=>{
    setIsOpen(!isOpen)
    // setCart(()=>cartListedCity(el))
    
    console.log('OPEN')
  }

  return (
    <div>

      <nav >
      <header >
        <p >C</p>
        <img src='https://t.pimg.jp/064/964/944/5/64964944.jpg' alt='covid' />
        <p className='vid'>VID-19 TRACKER</p>
      </header>
      <div className='cart'>
      <BsBookmarkCheck 
      className='bookmark'
      onClick={ClickBookMark}
      />
      
     
       {/* {cartListedCity} */}
      <button className='signin'>Sign In</button>

      </div>
      <div className={`menu ${isOpen ? 'active' : 'inactive'}`}>
          <div className='openList'>
            {cartListedCity}
          {/* <Tracker cartListedCity={cartListedCity}/> */}
          </div>
        </div>
          

      </nav>

      <div className='home'>

        <div className='home_contents'>
          <p className='p1'>CORONAVIRUS</p>
          <p>Track Your State With</p>
          <p>Covid-19 Tracker</p>
        </div>
      </div>
    </div>
  )
}

export default Info

