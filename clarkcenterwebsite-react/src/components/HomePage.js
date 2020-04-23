import React from 'react';

//import Home Page Components
import Carousel from './Carousel';
import Marketing from './Marketing';
import Medici from './Medici';
import Dispensary from './Dispensary';
import AppointmentForm from './AppointmentForm';
import HomeMap from './HomeMap';
import DonBio from './DonBio';
import TeamBio from './TeamBio';
import Footer from './Footer';
import DonImage from '../images/IMG_3171i.png';

const HomePage = (props) => {
    return (
        <div>
            <Carousel carousel={props.carousel}></Carousel>
            <Marketing marketing={props.marketing}></Marketing>
            <Medici content={props.content.Medici}></Medici>
            <Dispensary content={props.content.Dispensary}></Dispensary>
            <DonBio profileImage={DonImage} profileCopy={props.profile.profileCopy}></DonBio>
            <TeamBio teamProfile={props.profile.teamProfile}></TeamBio>
            <HomeMap></HomeMap>
        </div>
    )
}

export default HomePage

