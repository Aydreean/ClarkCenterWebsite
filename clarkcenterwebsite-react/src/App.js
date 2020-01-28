import React from 'react';
import { Component } from 'react';
import './modern-business.css';
import 'font-awesome/css/font-awesome.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';

//Custom Components
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ServicesPage from './components/ServicesPage';
// import Carousel from './components/Carousel';
// import Marketing from './components/Marketing';
// import AppointmentForm from './components/AppointmentForm';
// import HomeMap from './components/HomeMap';
import Footer from './components/Footer';
import ObesityCenterPage from './components/ObesityCenterPage';
import ContactPage from './components/ContactPage';


export class App extends Component {
  constructor (props) {
    super(props);

    this.state = {
      carousel: [
        {
          backgroundImage: "IMG_3131i.jpg",
          Header: "Discover a Healthier You",
          Button: "Call Our Office!",
          isActive: true
        },
        {
          backgroundImage: "IMG_3136.JPG",
          Header: "Eat a Healthier You",
          Button: "Call Our Office!",
          isActive: false
        },
        {
          backgroundImage: "IMG_3124.JPG",
          Header: "Become a Healthier You",
          Button: "Call Our Office!",
          isActive: false
        }
      ],
      marketing: [
        {
          Title: "Internal Medicine",
          FAIcon: "fas fa-stethoscope",
          Copy: <p>We concentrate on prevention, diagnosis, and treatment of adult diseases. Services are provided at our out-patient facility. We also utilize the <span><a href='https://www.beaumont.org/'>Beaumont Hospital System</a></span> and are affiliated with long-term care facilities and skilled nursing homes.</p>
        },
        {
          Title: "Obesity",
          FAIcon: "fab fa-nutritionix",
          Copy: <p>We offer nonsurgical weight loss programs utilizing FDA-approved medications, behavior modification, exercise, and changes in lifestyle for overweight and obese patients.</p>      
        },        
        {
          Title: "House Calls",
          FAIcon: "fas fa-clinic-medical",
          Copy: <p>We take pride in offering comprehensive home-based medical care. Our focus in doing so is to maintain your health and independence, and to avoid the need for hospitalization, rehospitalization, or admission into long-term care facilities/nursing homes/skilled rehabilitation centers.</p>    
        }
      ],
      services: [
        {
            id: 1,
            Title: "Arthritis",
            Description: "Diabetes is a disease"
        },
        {
            id: 2,
            Title: "Atrial Fibrilation",
            Description: "Diabetes is a disease"
        },
        {
            id: 3,
            Title: "Bronchitis",
            Description: "Diabetes is a disease"
        }
      ]
    }
  }
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar></Navbar>
          <Route exact path="/" render={(props) => <HomePage marketing={this.state.marketing} carousel={this.state.carousel} />}/>
          <Route path="/About" render={(props) => <AboutPage/>}/>
          <Route path="/Services" render={(props) => <ServicesPage services={this.state.services} />}/>
          <Route path="/ObesityCenter" render={(props) => <ObesityCenterPage/>}/>
          <Route path="/Contact" render={(props) => <ContactPage/>}/>
          <Footer></Footer>
        </div>
      </Router>
    )

  }
}

export default App;
