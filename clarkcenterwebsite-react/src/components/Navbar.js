import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import '../modern-business.css';

const Navbar = (props) => {
    return (
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark">
            <div className="container">
                <a className="navbar-brand" href="/" alt="Clark Center for Comprehensive Medicine Logo">Clark Center</a>
                <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="/About">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/Services">Services</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/ObesityCenter">Obesity Center</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/Contact">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
      </nav>
    )
}

export default Navbar;
