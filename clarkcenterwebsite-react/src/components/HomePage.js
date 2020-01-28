import React from 'react';

//import Home Page Components
import Carousel from './Carousel';
import Marketing from './Marketing';
import AppointmentForm from './AppointmentForm';
import HomeMap from './HomeMap';
import Footer from './Footer';

const HomePage = (props) => {
    return (
        <div>
            <Carousel carousel={props.carousel}></Carousel>
            <Marketing marketing={props.marketing}></Marketing>
            <AppointmentForm></AppointmentForm>
            <HomeMap></HomeMap>
        </div>
    )
}

export default HomePage

