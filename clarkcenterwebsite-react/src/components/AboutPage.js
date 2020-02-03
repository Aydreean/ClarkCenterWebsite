import React from 'react'
import DonImage from '../images/IMG_3171i.jpg';
import DonBio from '../components/DonBio';
import TeamBio from '../components/TeamBio';

const AboutPage = (props) => {
    return (
        <div>
            <DonBio profileImage={DonImage} profileCopy={props.profile.profileCopy}></DonBio>
            <TeamBio teamProfile={props.profile.teamProfile}></TeamBio>
        </div>
    )
}

export default AboutPage

