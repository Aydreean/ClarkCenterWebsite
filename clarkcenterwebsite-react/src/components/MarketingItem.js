import React from 'react'

const MarketingItem = (props) => {
    return (
        <div className="col-lg-4 mb-4">
            <div className="card h-100">
            <h4 className="card-header"><i className={props.item.FAIcon + " mb-4"}></i><br/>{props.item.Title}</h4>
                <div className="card-body">
                    <div className="card-text">{props.item.Copy}</div>
                </div>
            </div>
        </div>
    )
}

export default MarketingItem
