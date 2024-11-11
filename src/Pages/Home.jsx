import YouTube from "react-youtube";

const Home = ({ movies, movie, trailer, setPlaying, playing, setMovie }) => {
  const IMAGE_PATH = "https://image.tmdb.org/t/p/original";

  // Función para manejar la selección de una película
  const selectMovie = async (movie) => {
    setMovie(movie);
    window.scrollTo(0, 0);
  };

  return (
    <div>
      {/* Banner y reproductor de video */}
      <div>
        <main>
          {movie ? (
            <div
              className="viewtrailer"
              style={{
                backgroundImage: `url("${IMAGE_PATH}${movie.backdrop_path}")`,
              }}
            >
              {playing ? (
                <>
                  <YouTube
                    videoId={trailer.key}
                    className="reproductor container"
                    containerClassName={"youtube-container"}
                    opts={{
                      width: "100%",
                      height: "100%",
                      playerVars: {
                        autoplay: 1,
                        controls: 0,
                        cc_load_policy: 0,
                        fs: 0,
                        iv_load_policy: 0,
                        modestbranding: 0,
                        rel: 0,
                        showinfo: 0,
                      },
                    }}
                  />
                  <button onClick={() => setPlaying(false)} className="button1">
                    close
                  </button>
                </>
              ) : (
                <div className="container">
                  <div className="">
                    {trailer ? (
                      <button
                        className="button1"
                        onClick={() => setPlaying(true)}
                        type="button"
                      >
                        Play Trailer
                      </button>
                    ) : (
                      "sorry, trailer not available"
                    )}
                    <h1 className="text-white">{movie.title}</h1>
                    <p className="text-white">{movie.overview}</p>
                  </div>
                </div>
              )}
            </div>
          ) : null}
        </main>
      </div>

      {/* Muestra las películas actuales */}
      <div className="card__container">
        <div className="row1">
          {movies.map((movie) => (
            <div
              key={movie.id}
              className="card"
              onClick={() => selectMovie(movie)}
            >
              <div className="img-container">
                <img
                  className="img__movie"
                  src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                  alt=""
                />
              </div>
              <div className="description card">
                <p className="movie__title">{movie.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
