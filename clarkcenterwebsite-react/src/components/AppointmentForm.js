import React, { Component } from 'react'

class AppointmentForm extends Component {

    handleFormSubmit(e) {
        e.preventDefault();
        alert("submitted");
    }

    render() {
        return (
            <div className="appointmentSec">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h2>Schedule an Appointment</h2>
                            <form className="form" id="contactForm" onSubmit={this.handleFormSubmit}>
                            <div className="form-group">
                                <input type="text" className="form-control mb-4" placeholder="Name" id="name"/>
                                <input type="text" className="form-control mb-4" placeholder="Email" id="email"/>
                                <input type="text" className="form-control mb-4" placeholder="Phone Number" id="phone"/>
                                <input type="text" className="form-control mb-4" placeholder="Reason for Appointment" id="message"/>
                                <button type="submit" className="btn btn-lg btn-secondary btn-block" id="sendMessageButton">Submit</button>
                            </div>
                            </form>
                        </div>
                    </div>
              </div>
        </div>
        )
    }
}

export default AppointmentForm