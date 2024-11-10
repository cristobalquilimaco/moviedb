import './App.css';
import axios from 'axios';
import { useState } from 'react';
import YouTube from 'react-youtube';

function App() {

const API_URL = "https://api.themoviedb.org/3"
const API_KEY = "0c8d154b2b93ccc0da064d6ff2a2575b"
const IMAGE_PATH = "https://image.tmdb.org/t/p/original"
const URL_IMAGE = "https://image.tmdb.org/t/p/original"

//VARIABLES DE ESTADO

const [movies, setMovies] = useState([]);
const [searchKey, setSearchKey] = useState("");
const [trailer, setTrailer] = useState(null);
const [movie, setMovie] = useState({title: "Loading Movies"});
const [playing, setPlaying] = useState(false);

// Peticion por get a la API
const fetchMovies = async(searchKey) =>{
  const type = searchKey ? "search" : "discover"
  const {data: {results},
} = await axios.get(`${API_URL}/${type}/movie`, {
  params : {
    api_key: API_KEY,
    query: searchKey,
  },
});

setMovies(results)
setMovie(results[0])

}

  return (
    <>
      <div>
        {/* En este contenedor se muestran las peliculas actuales */}
        <div className='container mt-3'>
          <div className='row'>
            {
              movies.map((movie) =>(
                <div key={movie.id} className='col-md-4 mb-3'>
                  <img src={`${URL_IMAGE + movie.poster_path}`} alt="" />
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default App
