import React from 'react';
import { Component } from 'react';
import './modern-business.css';
import 'font-awesome/css/font-awesome.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import AnchorLink from 'react-anchor-link-smooth-scroll'

//Custom Components
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import MediciPage from './components/MediciPage';
import ContactPage from './components/ContactPage';
import Footer from './components/Footer';




export class App extends Component {
  constructor (props) {
    super(props);

    this.state = {
      profile: {
        proflileImage: "IMG_3171i.jpg",
        profileCopy: <div><p>Hello! I'm Donald Clark, P.A.-C. I am a graduate from The Mercy College of Detroit Physician Assistant program in 1987 and have been continuously licensed and certified as a Physician Assistant since 1987 by the N.C.C.P.A. I have extensive experience in various medical sub specialties such as: Primary Care, Internal Medicine, Cardiology, Urgent Care, Sub-acute rehabilitation Medicine, and Medical House Calls. I am affiliated with the Beaumont Hospital Health System with privileges at Beaumont in Dearborn, Michigan, and Beaumont Hospital in Wayne, Michigan. I am also an affiliate instructor for the University of Detroit Physician Assistant program and have been a preceptor for several Nurse Practitioner programs. I have completed training by ISCD, and am a certified clinical densitometrist.</p>

        <p>Additionally, I have been affiliated sub-acute rehabilitation centers in Wayne County, Michigan. I am the medical provider for home bound patients in Wayne County, Michigan. I speaks Spanish fluently and have been a volunteer on charitable medical missions to Latin America.</p>
        <p>Currently, I am the President of Clark Center for Comprehensive Medicine, P.C. in Garden City, Michigan.</p></div>,
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
      content: {
        Medici: {
          Header: "We are Remote!",
          Description:  "To minimize your exposure to COVID-19, Influeza A & B, and other infectious diseases, we are proud to offer remote services via the Medici Telemedicine mobile app. Using Medici, your provider is able to consult remotely with you via text, audio, and video. Tap below to download Medici to your mobile phone!",
          Button: "Download Medici",
          Price: "$50 / 30 minute consultation",
          Warning: "All Payments are collected inside of the Medici App"
        },
        Dispensary: {
          Header: "Prescription Refills",
          Description:  "For your convenience, we have several common prescriptions available directly in the office. Save a trip to your pharmacy by refilling your prescriptions during your appointment. We offer the most popular brands of these medication classes:"
        }
      }
    }
  }
  render() {
    return (
      <Router>
        <div className="App" id="top">
          <Navbar></Navbar>
          <Route exact path="/" render={(props) => <HomePage marketing={this.state.marketing} carousel={this.state.carousel} profile={this.state.profile} content={this.state.content} />}/>
          {/* <Route path="/About" render={(props) => <AboutPage profile={this.state.profile}/>}/>
          <Route path="/Services" render={(props) => <ServicesPage services={this.state.services} />}/>
          <Route path="/ObesityCenter" render={(props) => <ObesityCenterPage/>}/> */}
          <Route path="/Contact" render={(props) => <ContactPage contact={this.state.contact}/>}/>
          <Route path="/Medici" render={(props) => <MediciPage contact={this.state.contact}/>}/>
          <Footer></Footer>
        </div>
      </Router>
    )

  }
}

export default App;
