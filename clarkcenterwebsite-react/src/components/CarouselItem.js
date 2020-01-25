import React from 'react';
import Slide1 from "../images/IMG_3131i.jpg";
import Slide2 from "../images/IMG_3126.JPG";
import Slide3 from "../images/IMG_3124.JPG";

const CarouselItem = (props) => {
    return (
        <div className={"carousel-item " + props.item.isActive == true ? "Active" : ""} style={{backgroundImage: "url(" + props.item.backgroundImage + ")"}}>
        <div className="container">
            <div className="row homeJumbo">
            <div className="col-lg-6">
                <div>
    <h1 className="text-center contentstart text-white cta-text">{props.item.Header}</h1>
{/*<a href="#">*/}<button className="btn btn-lg btn-secondary btn-block cta shadow"><i className="fas fa-phone-alt mr-4"></i>{props.item.Button}</button>{/*</a>*/}
                </div>
            </div>
            </div>
        </div>
        <div className="carousel-caption d-none d-md-block">
            <div className="carousel-caption d-none d-md-block">
                </div>
        </div>
        </div>
    )
}

// {props.carousel.map((display, i) => 
//     <CarouselItem item={display} key={i}></CarouselItem>
// )}

export default CarouselItem
