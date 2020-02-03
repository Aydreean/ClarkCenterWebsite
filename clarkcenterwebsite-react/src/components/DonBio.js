import React from 'react'

const DonBio = (props) => {
    return (
        <div className="container">
            <h1 className="mt-4 mb-3">About Clark Center</h1>
        
            <ol className="breadcrumb">
                <li className="breadcrumb-item">
                    <a href="/">Home</a>
                </li>
                <li className="breadcrumb-item active">About</li>
            </ol>
        
            <div className="row">
                <div className="col-lg-6">
                    <img className="img-fluid rounded mb-4 donny" src={props.profileImage} alt="Donald G. Clark, PA-C"/>
                </div>
                <div className="col-lg-6">
                    <h2>Donald G. Clark, PA-C </h2>
                    {props.profileCopy}
                </div>
            </div>
        </div>
    )
}

export default DonBio
