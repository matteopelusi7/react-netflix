import React from 'react'
import {main} from '../css/main.css'

const Film = ({films}) => {
  return (
    <div className='card-container'>
      {films.map((el) => {
        return (
          <div key={el.id}  className='card'>
            {el.poster_path ?  
                <img src={`https://image.tmdb.org/t/p/w342${el.poster_path}`} alt="" /> :
                <img src="https://image.tmdb.org/t/p/w342/wwemzKWzjKYJFfCeiB57q3r4Bcm.png" alt="" />
            }
          </div>
        );
      })}
    </div>
  )
}

export default Film