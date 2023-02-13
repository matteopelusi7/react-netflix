import React from 'react'
import {main} from '../css/main.css'

const Film = ({films}) => {
  return (
    <div className='list-wrapper'>
      {films.map((el) => {
        return (
          <div key={el.id}  className='list-item'>
            {el.poster_path ?  
              <img src={`https://image.tmdb.org/t/p/w342${el.poster_path}`} alt="" /> :
              <img src="https://image.tmdb.org/t/p/w342/wwemzKWzjKYJFfCeiB57q3r4Bcm.png" alt="" />
            }
            <div className='description'>
              <p className='title-info'>{ el.name }</p>
              <p className='title-info'>{ el.original_name }</p>
              <p>Overview: { el.overview }</p>
              <p>Voto: {el.vote_average}</p>
            </div>
          </div>
        );
      })}
    </div>
  )
}

export default Film