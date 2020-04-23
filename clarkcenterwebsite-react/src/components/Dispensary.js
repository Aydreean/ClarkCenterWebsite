import React from 'react'

const Dispensary = (props) => {
    return (
        <div className="dispensarySec">
            <h1>{props.content.Header}</h1>
            <p>{props.content.Description}</p>
        </div>
    )
}

export default Dispensary
