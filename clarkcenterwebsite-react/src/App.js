import React from 'react';
import { Component } from 'react';
// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './modern-business.css';
import 'font-awesome/css/font-awesome.css';

//Custom Components
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import Marketing from './components/Marketing';


export class App extends Component {
  constructor (props) {
    super(props);

    this.state = {
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
      <div className="App">
        <Navbar></Navbar>
        <Carousel></Carousel>
        <Marketing></Marketing>
    </div>
    )
  }
}

export default App;
