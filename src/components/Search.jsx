import React from 'react'

const Search = () => {
  return (
    <div className='search'>
      <div className='searchForm'>
        <input type='text' placeholder='find a user' />
      </div>
      <div className='userChat'>
        <img src='https://avatars.githubusercontent.com/u/109285000?v=4' alt='user' />
        <div className='userChatInfo'>
          <span>Bael</span>
        </div>
      </div>
    </div>
  )
}

export default Search