import React from 'react'
import {main} from '../css/main.css'
import Film from './Film'
import Movies from './Movies'

const Main = ({movies, films}) => {
  return (
    <div className='container'>
      <h2>Serie Tv</h2>
      <Movies movies={movies} />
      <h2>Film</h2>
      <Film films={films} />
    </div>
  )
}

export default Main