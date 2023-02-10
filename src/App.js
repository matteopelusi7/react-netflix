import Header from './components/Header.js'
import Main from './components/Main.js'
import './css/App.css';
import {header} from './css/header.css'
import axios from 'axios';
import React, {useState, useEffect} from 'react'

function App() {

  const [data, setData] = useState([])
  const [query, setQuery] = useState('Cerca')

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchMovie();
  }

  const fetchMovie = () => {
    axios.get('https://api.themoviedb.org/3/search/movie', {
      params: {
        api_key: 'aec3bd9964f9a8a7bdebc5ebcc0e28cd',
        language: 'it-IT',
        query: query,
      }
    })
    .then( res => {
      console.log(res.data.results)
      setData(res.data.results)
    })
    .catch( error => {
      console.log(error.response)
    })
  }

  useEffect(() => {
    fetchMovie()
  }, [])
  

  return (
    <div className="App">
      <div className='header-container'>
        <div>
          <h1 className='title'>NETFLIX</h1>
        </div>
        <div>
          <form className='form-container' onSubmit={handleSubmit}>
            <input className='input' type="text" name="search" value={query} onChange={(e)=> setQuery(e.target.value)} placeholder='Cerca film/serie tv' />
            <button type="submit" onClick={handleSubmit}>Cerca</button>
          </form>
        </div>
      </div>
      <Main data={data} />
    </div>
  );
}


export default App;
