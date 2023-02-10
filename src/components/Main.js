import React from 'react'
import {main} from '../css/main.css'

const Main = ({data}) => {
  return (
    <div className='card-container'>
      {data.map((el) => {
        return (
          <div key={el.id}  className='card'>
            {el.title}
          </div>
        );
      })}
    </div>
  )
}

export default Main