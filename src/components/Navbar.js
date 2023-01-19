import React from 'react'
import propTypes from 'prop-types'
// import { Link } from 'react-router-dom'

export default function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme={props.mode}>
    <div className="container-fluid">
      <a className="navbar-brand" href="#">{props.title}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">About</a>
          </li>
        </ul>
        {/* <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-primary" type="submit">Search</button>
        </form> */}

                {/* <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                  <label class="form-check-label" for="flexCheckDefault">
                    Default checkbox
                  </label>
                </div> */}
                <div className={`form-check form-switch text-${props.textMode} mx-2`}>
          <input className="form-check-input" onClick={props.toggleSwitchBlue} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Blue dark mode</label>
        </div>

        <div className={`form-check form-switch text-${props.textMode} mx-2`}>
          <input className="form-check-input" onClick={props.toggleSwitchGreen} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Green dark mode</label>
        </div>
      </div>
    </div>
  </nav>
  )
}

Navbar.propTypes = {
    title: propTypes.string.isRequired,
    about: propTypes.string.isRequired
}

Navbar.defaultProps = {
    title: 'Set Title Here',
    about: 'About'
}
