import React from 'react'
import ContactMap from '../components/ContactMap';

const ContactInfo = () => {
    return (
        <div className="container">

        <h1 className="mt-4 mb-3">Contact</h1>
    
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="/">Home</a>
          </li>
          <li className="breadcrumb-item active">Contact</li>
        </ol>
    
        <div className="row">
          <ContactMap></ContactMap>
          <div className="col-lg-4 mb-4">
            <h3>Clark Center for Comprehensive Medicine</h3>
            <p>
              29521 Ford Rd. 
              <br/>Garden City, MI 48135
              <br/>
            </p>
            <p>
              <abbr title="Phone"><i className="fas fa-phone-alt"></i></abbr> (734) 367-1205
            </p>
            <p>
              <abbr title="Email"><i className="fas fa-envelope"></i></abbr>
              <a href="mailto:name@example.com"> clarkcenter@gmail.com
              </a>
            </p>
            <p>
              <abbr title="Hours"><i className="fas fa-calendar-alt"></i></abbr><br/>Monday: 8:00 AM to 4:00 PM<br/>Tuesday - Thursday: 8:30 AM to 4:00 PM<br/>Friday: 8:30 AM to 12:00 PM
            </p>
          </div>
        </div>
      </div>
    )
}

export default ContactInfo
