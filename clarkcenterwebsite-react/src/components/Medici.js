import React from 'react'

const Medici = (props) => {
    return (
        <div className="mediciSec">
            <h1>{props.content.Header}</h1>
            <p>{props.content.Description}</p>
            <button className="btn cta">{props.content.Button}</button>
        </div>
    )
}

export default Medici
