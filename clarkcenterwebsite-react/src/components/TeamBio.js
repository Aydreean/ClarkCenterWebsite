import React from 'react'
import TeamMember from './TeamMember';

const TeamBio = (props) => {
    return (
        <div className="teamSec">
        <div className="container">
            <div className="row">
            {props.teamProfile.map((member, i) =>
                    <TeamMember member={member} key={i}></TeamMember>
                )}
            </div>
        </div>
      </div>
    )
}

export default TeamBio
