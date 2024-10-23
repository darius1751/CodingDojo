import { useState } from 'react'
import axios from 'axios';
import { URLS } from './constants/URLS';
import { API_KEY } from './constants/API_KEY';
import { ImageAPI } from './interfaces/ImageAPI';
import { ToogleTheme } from './components/ToogleTheme/ToogleTheme';
import './App.css'

export const App = () => {
  const [image, setImage] = useState('');
  const handleClick = async () => {
    const response = await axios.get<ImageAPI>(`${URLS.API_IMAGES}&per_page=1&page=${(Math.random() * (607 - 1)) + 1}`, { headers: { Authorization: API_KEY, } })
    const { data } = response
    setImage(data.photos[0].src.original)
  }
  return (
    <div className='page'>
      <ToogleTheme />
      <div className="container">
        <h1>Random Image</h1>
        {
          image ? <img className='image' alt='random' src={image}/> : <div className='not-image'></div>
        }
        <button onClick={handleClick} className='btn btn-fetch'>Fetch New Random Image</button>
      </div>
    </div>
  )
}

