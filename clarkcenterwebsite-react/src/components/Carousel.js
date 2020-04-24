import React from 'react';
import Slide1 from "../images/IMG_3131i.jpg";
import Slide2 from "../images/IMG_3126.JPG";
import Slide3 from "../images/IMG_3124.JPG";

const Carousel = (props) => {
    return (
        <header>
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="true">
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner" role="listbox">
                <div className="carousel-item active" style={{backgroundImage: "url(" + Slide1 + ")"}}>
                <div className="container">
                    <div className="row homeJumbo">
                    <div className="col-lg-6">
                        <div>
                            <h1 className="text-center contentstart text-white cta-text">Discover A Healthier You</h1>
                                <button className="btn btn-lg btn-secondary btn-block cta shadow"><a href="tel:17343671205"><i className="fas fa-phone-alt mr-4"></i>Call Our Office!</a></button>
                        </div>
                    </div>
                    </div>
                </div>
                {/* <div className="carousel-caption d-none d-md-block">
                    <div className="carousel-caption d-none d-md-block">
                        </div>
                </div> */}
                </div>
                <div className="carousel-item" style={{backgroundImage: "url(" + Slide2 + ")"}}>
                    <div className="container">
                        <div className="row homeJumbo">
                        <div className="col-lg-6">
                            <div>
                                <h1 className="text-center contentstart text-white cta-text">Remote Consultations</h1>
                                    <button className="btn btn-lg btn-secondary btn-block cta shadow">Download Medici</button>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item" style={{backgroundImage: "url(" + Slide3 + ")"}}>
                    <div className="container">
                        <div className="row homeJumbo">
                        <div className="col-lg-6">
                            <div>
                                <h1 className="text-center contentstart text-white cta-text">Refill Prescriptions</h1>
                                    <button className="btn btn-lg btn-secondary btn-block cta shadow">Call Our Office!</button>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
      </header>
    )
}

export default Carousel;
