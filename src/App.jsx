import './App.css'
import axios from 'axios'
import { useState } from 'react'
import YouTube from 'react-youtube'

function App() {

const API_URL = "https://api.themoviedb.org/3"
const API_KEY = "0c8d154b2b93ccc0da064d6ff2a2575b"
const IMAGE_PATH = "https://image.tmdb.org/t/p/original"
const URL_IMAGE = "https://image.tmdb.org/t/p/original"

//VARIABLES DE ESTADO

const [movies, setMovies] = useState([])
const [searchKey, setSearchKey] = useState("")

  return (
    <>
      <div>

      </div>
    </>
  )
}

export default App
