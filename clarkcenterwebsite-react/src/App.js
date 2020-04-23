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
        profileCopy: <div><p>Donald Clark, PA-C, makes access to comprehensive medical care convenient for his aging patients and extends care to underserved communities in metro Detroit and in Central and South America. In 2004, after working for several years in cardiology, urgent care and in primary care practices, he established <span><a className="bio" href="/">Clark Center for Comprehensive Medicine</a></span>. There, he provides centralized access to care to patients, most of whom he’s treated for almost three decades.</p><p>Partnering with two collaborating physicians, Dr. Clark manages patients holistically. Treatment plans tap into patients’ emotional, physical and spiritual well-being as well as social determinants such as access to transportation, mobility, finances and housing. He even likes to involve family members to take a team approach to solving patients’ medical issues. Since most of his patients have complex, debilitating medical problems and are over the age of 50, he has expanded from onsite primary care to offering extended services, including ongoing homecare, hospital, nursing home and sub-acute rehabilitation center rounds. He follows patients from outpatient to inpatient admission and coordinates access to physical and occupational therapists, dieticians, mental health providers and social workers. He also offers some diagnostic imaging to ensure patients have easier access to testing, specialists and comprehensive healthcare.</p><p>Beyond interfacing with patients, Clark devotes time and resources to research emerging standards of care to remain professionally adept and administer evidence-based medicine.</p></div>,
        teamProfile: [{
          name: "Amanda Moore",
          role: "Office Manager",
          bio: ""
        },{
          name: "Brittney McAdams",
          role: "Office Administrator",
          bio: ""
        },{
          name: "Robin Mulka",
          role: "Medical Assistant",
          bio: ""
        },{
          name: "Adrian Clark",
          role: "Media / Remote Patient Manager",
          bio: ""
        },
        {
          name: "Elena Clark",
          role: "Chronic Care Manager",
          bio: ""
        },{
          name: "Krystal Mulka",
          role: "Administrative Aide",
          bio: ""
        },{
          name: "Lily",
          role: "Office Pug",
          bio: ""
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
          Copy: <p>We concentrate on prevention, diagnosis, and treatment of adult diseases. Services are provided at our Garden City out-patient facility. We also utilize the <span><a href='https://www.beaumont.org/'>Beaumont Hospital System</a></span> and are affiliated with long-term care facilities and skilled nursing homes.</p>
        },
        {
          Title: "Obesity",
          FAIcon: "fab fa-nutritionix",
          Copy: <p>We offer nonsurgical weight loss programs utilizing FDA-approved medications, behavior modification, exercise, and changes in lifestyle for overweight and obese patients.</p>      
        },        
        {
          Title: "Telemedicine",
          FAIcon: "fas fa-clinic-medical",
          Copy: <p>We offer telehealth office visits utilizing Medici.</p>    
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
      ],
      content: {
        Medici: {
          Header: "We are Remote!",
          Description:  "To minimize your exposure to COVID-19 and other infectious diseases such as Influenza A & B, we are proud to offer remote services via the Medici Telemedicine mobile app. Using Medici, your provider is able to consult remotely with you via text, audio, and video. Tap below to download Medici to your mobile phone! $50 for 15-30 minute consultation",
          Button: "Download Medici"
        },
        Dispensary: {
          Header: "Prescription Refills",
          Description:  "For your convenience, we have several common prescriptions available directly in the office. Save a trip to your pharmacy by filling your prescriptions "
        }
      }
    }
  }
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar></Navbar>
          <Route exact path="/" render={(props) => <HomePage marketing={this.state.marketing} carousel={this.state.carousel} profile={this.state.profile} content={this.state.content} />}/>
          {/* <Route path="/About" render={(props) => <AboutPage profile={this.state.profile}/>}/>
          <Route path="/Services" render={(props) => <ServicesPage services={this.state.services} />}/>
          <Route path="/ObesityCenter" render={(props) => <ObesityCenterPage/>}/> */}
          <Route path="/Contact" render={(props) => <ContactPage contact={this.state.contact}/>}/>
          <Footer></Footer>
        </div>
      </Router>
    )

  }
}

export default App;
