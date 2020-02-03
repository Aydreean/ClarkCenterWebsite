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
import Footer from './components/Footer';
import ObesityCenterPage from './components/ObesityCenterPage';
import ContactPage from './components/ContactPage';


export class App extends Component {
  constructor (props) {
    super(props);

    this.state = {
      profile: {
        proflileImage: "IMG_3171i.jpg",
        profileCopy: <div><p>Donald Clark, PA-C, makes access to comprehensive medical care convenient for his aging patients and extends care to underserved communities in metro Detroit and in Central and South America. In 2004, after working for several years in cardiology, urgent care and in primary care practices, he established <span><a href="/">Clark Center for Comprehensive Medicine</a></span>. There, he provides centralized access to care to patients, most of whom he’s treated for almost three decades.</p><p>Partnering with two collaborating physicians, Dr. Clark manages patients holistically. Treatment plans tap into patients’ emotional, physical and spiritual well-being as well as social determinants such as access to transportation, mobility, finances and housing. He even likes to involve family members to take a team approach to solving patients’ medical issues. Since most of his patients have complex, debilitating medical problems and are over the age of 50, he has expanded from onsite primary care to offering extended services, including ongoing homecare, hospital, nursing home and sub-acute rehabilitation center rounds. He follows patients from outpatient to inpatient admission and coordinates access to physical and occupational therapists, dieticians, mental health providers and social workers. He also offers some diagnostic imaging to ensure patients have easier access to testing, specialists and comprehensive healthcare.</p><p>Beyond interfacing with patients, Clark devotes time and resources to research emerging standards of care to remain professionally adept and administer evidence-based medicine.</p></div>,
        teamProfile: [{
          name: "Amanda Moore",
          role: "Office Manager",
          bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus aut mollitia eum ipsum fugiat odio officiis odit."
        },{
          name: "Brittney McAdams",
          role: "Office Administrator",
          bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus aut mollitia eum ipsum fugiat odio officiis odit."
        },{
          name: "Robin Mulka",
          role: "Medical Assistant",
          bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus aut mollitia eum ipsum fugiat odio officiis odit."
        },{
          name: "Adrian Clark",
          role: "Scribe",
          bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus aut mollitia eum ipsum fugiat odio officiis odit."
        },{
          name: "Krystal Mulka",
          role: "Administrative Aide",
          bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus aut mollitia eum ipsum fugiat odio officiis odit."
        },{
          name: "Lily",
          role: "Pug",
          bio: "Slut"
        }]
      },
      contact: {

      },
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
          <Route path="/About" render={(props) => <AboutPage profile={this.state.profile}/>}/>
          <Route path="/Services" render={(props) => <ServicesPage services={this.state.services} />}/>
          <Route path="/ObesityCenter" render={(props) => <ObesityCenterPage/>}/>
          <Route path="/Contact" render={(props) => <ContactPage contact={this.state.contact}/>}/>
          <Footer></Footer>
        </div>
      </Router>
    )

  }
}

export default App;
