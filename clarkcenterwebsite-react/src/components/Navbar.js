import React from 'react';
import {Link} from 'react-router-dom';

import Logo from '../images/logo.png';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import '../modern-business.css';

const Navbar = (props) => {
    return (
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark">
                <div className="container">
                    <Link className="navbar-brand" to="/" alt="Clark Center for Comprehensive Medicine Logo"><img className="logo" src={Logo}/></Link>
                    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto">
                        <li className="nav-link"><Link to="#" className="nav-item">Team</Link></li>
                        {/* <li className="nav-link"><Link to="#" className="nav-item">Services</Link></li> */}
                        {/* <li className="nav-link"><Link to="#" className="nav-item">Obesity Center</Link></li> */}
                        <li className="nav-link"><Link to="/Contact" className="nav-item">Contact</Link></li>
                        </ul>
                    </div>
                </div>
        </nav>
    )
}

export default Navbar;
