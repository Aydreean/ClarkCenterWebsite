import React from 'react';

const Navbar = (props) => {
    return (
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark fixed-top">
            <div className="container">
                <a className="navbar-brand" href="index.html" alt="Clark Center for Comprehensive Medicine Logo">Clark Center</a>
                <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="https://google.com">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="services.html">Services</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="obesitycenter.html">Obesity Center</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="contact.html">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
      </nav>
    )
}

export default Navbar;
