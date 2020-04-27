import React from 'react'
import MarketingItem from './MarketingItem';


const Marketing = (props) => {
    return (
        <div className="container" id="services">
            <div className="row mb-4 contentstart">
                {props.marketing.map((feature, i) =>
                    <MarketingItem item={feature} key={i}></MarketingItem>
                )}
            </div>
        </div>
    )
}

export default Marketing
