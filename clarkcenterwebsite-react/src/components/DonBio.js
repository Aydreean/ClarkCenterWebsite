import React from 'react'
import DonImage from '../images/IMG_3171i.png';

const DonBio = (props) => {
    return (
        <div className="donbio" id="team">
            <div className="container">
                <h2>Our Team</h2>
                <div className="row">
                    <div className="col-lg-6">
                        <img className="img-fluid rounded mb-4 donny" src={DonImage} alt="Donald G. Clark, PA-C"/>
                    </div>
                    <div className="col-lg-6">
                        <h2>Donald G. Clark, PA-C </h2>
                        <p>{props.profileCopy}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DonBio
