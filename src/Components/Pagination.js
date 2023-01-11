import React from 'react'

function Pagination({ cityPerPage, totalCity, paginate }) {

  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(totalCity / cityPerPage); i++) {
    pageNumbers.push(i)
  }


  return (
    <div>
      <ul className='page'>
        {pageNumbers.map(no => (
          <li key={no} className='page-item'>
            <a href='#!' onClick={() => paginate(no)}
              // className='page-link'
              // activeclassName='active'
              className ='active'
            >
              {no}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Pagination
