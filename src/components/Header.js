import React from 'react'
import {header} from '../css/header.css'

const Header = () => {
  return (
    <div className='header-container'>
      <div>
        <h1 className='title'>NETFLIX</h1>
      </div>
      <div>
        <form className='form-container'>
          <input className='input' type="text" name="" value="" placeholder='Cerca film/serie tv' />
          <button type="submit">Cerca</button>
        </form>
      </div>
    </div>
  )
}

export default Header