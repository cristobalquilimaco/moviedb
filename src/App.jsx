import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Home from "./Pages/Home";
import Navbar from "./Shared/Navbar";

const App = () => {
  const API_URL = "https://api.themoviedb.org/3";
  const API_KEY = "0c8d154b2b93ccc0da064d6ff2a2575b";

  const [movies, setMovies] = useState([]);
  const [searchKey, setSearchKey] = useState("");
  const [trailer, setTrailer] = useState(null);
  const [movie, setMovie] = useState({ title: "Loading Movies" });
  const [playing, setPlaying] = useState(false);

  // Función para obtener películas
  const fetchMovies = async (searchKey) => {
    const type = searchKey ? "search" : "discover";
    const { data: { results } } = await axios.get(`${API_URL}/${type}/movie`, {
      params: {
        api_key: API_KEY,
        query: searchKey,
      },
    });

    setMovies(results);
    setMovie(results[0]);

    if (results.length) {
      await fetchMovie(results[0].id);
    }
  };

  // Función para obtener información de una película
  const fetchMovie = async (id) => {
    const { data } = await axios.get(`${API_URL}/movie/${id}`, {
      params: {
        api_key: API_KEY,
        append_to_response: "videos",
      },
    });

    if (data.videos && data.videos.results) {
      const trailer = data.videos.results.find(
        (vid) => vid.name === "Official Trailer"
      );
      setTrailer(trailer ? trailer : data.videos.results[0]);
    }
    setMovie(data);
  };

  // Función para manejar la búsqueda
  const searchMovies = (e) => {
    e.preventDefault();
    fetchMovies(searchKey);
  };

  // Obtener las películas al cargar la app
  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <>
      <Navbar 
        searchKey={searchKey} 
        setSearchKey={setSearchKey} 
        searchMovies={searchMovies} 
      />
      <Routes>
        <Route 
          index 
          element={
            <Home 
              movies={movies} 
              movie={movie} 
              trailer={trailer} 
              setPlaying={setPlaying} 
              playing={playing} 
              setMovie={setMovie}
            />
          } 
        />
      </Routes>
    </>
  );
};

export default App;
