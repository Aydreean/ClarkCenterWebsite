import React from 'react'

const Medici = (props) => {
    return (
        <div className="mediciSec">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <h1>{props.content.Header}</h1>
                        <p>{props.content.Description}</p>
                        <h3>{props.content.Price}</h3>
                        <button className="btn btn-lg cta">{props.content.Button}</button>
                        <small>{props.content.Warning}</small>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Medici
