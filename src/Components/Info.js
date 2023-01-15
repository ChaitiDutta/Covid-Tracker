import { useState, useEffect } from 'react';
// import { BsBookmarkCheck } from 'react-icons/bs';
import Tracker from './Tracker';
function Info(){
  const [isOpen, setIsOpen] = useState(false)
  const [isClicked, setClicked] = useState(false)
  const [mode, setMode] = useState('light-theme')

  useEffect(()=>{
    document.body.className=mode;
  },[mode])

  // const ClickBookMark =()=>{
  //   setIsOpen(!isOpen)
  //    console.log('OPEN')
  // }
  const modeHandler=()=>{
    setClicked(!isClicked)
    if(mode==='dark-theme'){
      setMode('light-theme')
    }else{
      setMode('dark-theme')
    }
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
      {/* <BsBookmarkCheck 
      className='bookmark'
      onClick={ClickBookMark}
      /> */}
     
      <a href='#' className='mode-btn active'
      onClick={modeHandler}
      >{isClicked? 'Light Mode' : 'Dark Mode'}</a>
      <button className='signin'>Sign In</button>

      </div>
      {/* <div className={`menu ${isOpen ? 'active' : 'inactive'}`}>
          <div className='openList'>
           
          </div>
        </div> */}
          
     </nav>

      <div className='home'>

        <div className='home_contents'>
          <p className='p1'>CORONAVIRUS</p>
          <div className='para'>

          <p >Track Your State With</p>
          <p>Covid-19 Tracker</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Info

