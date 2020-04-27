import React from 'react';
import {Link} from 'react-router-dom';
import AnchorLink from 'react-anchor-link-smooth-scroll'

import Logo from '../images/logo.png';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import '../modern-business.css';

const Navbar = (props) => {
    return (
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark">
                <div className="container">
                    <AnchorLink className="navbar-brand" href="#top" alt="Clark Center for Comprehensive Medicine Logo"><img className="logo" src={Logo}/></AnchorLink>
                    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto">
                        <li className="nav-link"><AnchorLink href='#services' className="nav-item">Services</AnchorLink></li>                            
                        <li className="nav-link"><AnchorLink href='#medici' className="nav-item">Medici</AnchorLink></li>
                        <li className="nav-link"><AnchorLink href='#team' className="nav-item">Team</AnchorLink></li>
                        <li className="nav-link"><AnchorLink href='#map' className="nav-item">Contact</AnchorLink></li>
                        {/* <li className="nav-link"><Link to="#" className="nav-item">Services</Link></li> */}
                        {/* <li className="nav-link"><Link to="#" className="nav-item">Obesity Center</Link></li> */}
                        </ul>
                    </div>
                </div>
        </nav>
    )
}

export default Navbar;
