
import { Link } from "react-router-dom";
import "./styles/navbar.css";

const Navbar = ({ searchKey, setSearchKey, searchMovies }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-transparent" id="navbar">
      <div className="container">
        <Link className="navbar-brand text-white" to="/">MovieHub</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active text-white" aria-current="page" href="#">
                Home
              </a>
            </li>
          </ul>
          <form className="d-flex" role="search" onSubmit={searchMovies}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={searchKey}  // Vincula el input al estado searchKey
              onChange={(e) => setSearchKey(e.target.value)} // Actualiza el searchKey al escribir
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
