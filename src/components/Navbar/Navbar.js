import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="">
      <nav className="navbar navbar-expand-lg navbar-light bg-light ">
        <div className="container-fluid">
          <Link className="navbar-brand text-primary fw-bold" to="/home"> <i class="fas fa-book-open fs-6"></i>  Book Plex 10</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/home"><i class="fas fa-home"></i>  Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/AddProducts"><i class="fas fa-user-cog"></i>  Admin</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/orders"> <i class="fas fa-shopping-bag"></i>  Orders </Link>
              </li>
              <li className="nav-item">
                <Link to="/login">
                  <button className="btn btn-primary">
                    <i class="fas fa-sign-in-alt"></i>  Login</button>
                </Link>
              </li>
            </ul>

          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;