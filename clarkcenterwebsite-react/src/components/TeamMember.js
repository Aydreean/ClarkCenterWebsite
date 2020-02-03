import React from 'react'

const TeamMember = (props) => {
    return (
        <div className="col-lg-4 mb-4">
        <div className="card h-100 text-center">
          <div className="card-body">
            <h4 className="card-title">{props.member.name}</h4>
            <h6 className="card-subtitle mb-2 text-muted">{props.member.role}</h6>
            <p className="card-text">{props.member.bio}</p>
          </div>
        </div>
      </div>
    )
}

export default TeamMember
