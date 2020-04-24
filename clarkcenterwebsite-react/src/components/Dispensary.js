import React from 'react'

const Dispensary = (props) => {
    return (
        <div className="dispensarySec">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <h1>{props.content.Header}</h1>
                        <p>{props.content.Description}</p>
                        <ul>
                            <li>Anti-Hypertensives</li>
                            <li>Lipid-Lowering</li>
                            <li>Antibiotics</li>
                            <li>Anti-Inflammatory</li>
                            <li>Anti-Depressant</li>
                            <li>Nausea</li>
                            <li>Dizziness</li>
                            <li>Weight Loss</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dispensary
