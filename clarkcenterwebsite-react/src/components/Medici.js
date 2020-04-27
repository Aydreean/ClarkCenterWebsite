import React from 'react'
import MediciLogo from '../images/medici.png';
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Medici = (props) => {
    return (
        <div className="mediciSec" id="medici">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <a id="mediciSec"></a>
                        <h1>{props.content.Header}</h1>
                        <p>{props.content.Description}</p>
                        <a href="https://medici.cx/patients"><button className="btn btn-lg cta"><img src={MediciLogo}></img><br/>Tap to Download</button></a>
                        <h3>{props.content.Price}</h3>        
                        <small>{props.content.Warning}</small>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Medici
