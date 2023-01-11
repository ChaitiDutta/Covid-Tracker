import React from 'react'

const Card = () => {

  let data = document.querySelector('.mycard')

  const pressPrev = () => {
    let width = data.clientWidth;
    data.scrollLeft = data.scrollLeft - width;
  }
  const pressNext = () => {
    let width = data.clientWidth;
    data.scrollLeft = data.scrollLeft + width;
  }

  return (
    <div className='card'>

      {/* <div className='card-btn'> */}
      <button className='prev-btn' onClick={pressPrev}><p>&lt;</p></button>
      <button className='nxt-btn' onClick={pressNext} ><p>&gt;</p></button>
      {/* </div> */}

      <div className='mycard'>
        <img className='card-img' src='https://images.unsplash.com/photo-1584463699033-0da7a4af2c8e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' alt='covid image' />
        <img className='card-img' src='https://images.unsplash.com/photo-1584931423339-7a8d498ca23d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' alt='covid image' />
        <img className='card-img' src='https://images.unsplash.com/photo-1584931421154-2bf69492aa2c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80' alt='covid image' />
        <img className='card-img' src='https://images.unsplash.com/photo-1587814969489-e5df12e17391?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=877&q=80' alt='covid image' />
        <img className='card-img' src='https://images.unsplash.com/photo-1613758947307-f3b8f5d80711?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60' alt='covid image' />
        <img className='card-img' src='https://images.unsplash.com/photo-1611287158961-84f21a9a9fb8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' alt='covid image' />
        <img className='card-img' src='https://images.unsplash.com/photo-1603397873522-2fe355ec92c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' alt='covid image' />
        <img className='card-img' src='https://images.unsplash.com/photo-1587111720034-e85a8bde1163?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80' alt='covid image' />
        <img className='card-img' src='https://images.unsplash.com/photo-1605684954998-685c79d6a018?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' alt='covid image' />
        <img className='card-img' src='https://images.unsplash.com/photo-1583324113626-70df0f4deaab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60' alt='covid image' />
        <img className='card-img' src='https://images.unsplash.com/photo-1585331505473-7586f9cb0854?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60' alt='covid image' />
        <img className='card-img' src='https://images.unsplash.com/photo-1585421514738-01798e348b17?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60' alt='covid image' />
        <img className='card-img' src='https://images.unsplash.com/photo-1593007791459-4b05e1158229?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGNvdmlkJTIwMTl8ZW58MHx8MHx8&auto=format&fit=crop&w=1000&q=60' alt='covid image' />
        <img className='card-img' src='https://images.unsplash.com/photo-1587316745621-3757c7076f7b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60' alt='covid image' />
        <img className='card-img' src='https://images.unsplash.com/photo-1613796434552-319eb4997874?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fGNvdmlkJTIwMTl8ZW58MHx8MHx8&auto=format&fit=crop&w=1000&q=60' alt='covid image' />
      </div>
    </div>
  )
}

export default Card
