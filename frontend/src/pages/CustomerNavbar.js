import React from 'react'
import {Link} from 'react-router-dom';

export default function CustomerNavbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary bg-secondary">

      <div className="container">
        <Link to="/"
          className="nav-link active" aria-current="page"
        >FCLager</Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">

            <Link to="/"
            className="nav-link active" aria-current="page"
            >Home</Link>

            <Link to="/create"
            className="nav-link active" aria-current="page"
            >+Create User</Link> 
                      
          </div>
        </div>
      </div>
    </nav>
  )
}
