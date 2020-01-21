import React from 'react'
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { fab } from '@fortawesome/free-brands-svg-icons'
// import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Marketing = (props) => {
    return (
        <div className="container">
            <div className="row mb-4 contentstart">
                <div className="col-lg-4 mb-4">
                    <div className="card h-100">
                    <h4 className="card-header"><i className="fab fa-medicine mb-4"></i><br/>Internal Medicine</h4>
                        <div className="card-body">
                            <p className="card-text">We concentrate on prevention, diagnosis, and treatment of adult diseases. Services are provided at our out-patient facility. We also utilize the <span><a href="https://www.beaumont.org/">Beaumont Hospital System</a></span> and are affiliated with long-term care facilities and skilled nursing homes.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 mb-4">
                    <div className="card h-100">
                    <h4 className="card-header"><i className="fab fa-nutritionix mb-4"></i><br/>Obesity</h4>
                    <div className="card-body">
                        <p className="card-text">We offer nonsurgical weight loss programs utilizing FDA-approved medications, behavior modification, exercise, and changes in lifestyle for overweight and obese patients.</p>
                    </div>
                    </div>
                </div>
                <div className="col-lg-4 mb-4">
                    <div className="card h-100">
                        <h4 className="card-header"><i className="fas fa-clinic-medical mb-4"></i><br/>House Calls</h4>
                        <div className="card-body">
                            <p className="card-text">We take pride in offering comprehensive home-based medical care. Our focus in doing so is to maintain your health and independence, and to avoid the need for hospitalization, rehospitalization, or admission into long-term care facilities/nursing homes/skilled rehabilitation centers.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Marketing
