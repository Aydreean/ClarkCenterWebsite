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
                        <a href="#"><button className="btn btn-lg btn-secondary btn-block cta shadow"><i className="fas fa-phone-alt mr-4"></i>Call Our Office!</button></a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-caption d-none d-md-block">
                  <div className="carousel-caption d-none d-md-block">
                      {/* <h3>First Slide</h3>
                      <p>This is a description for the second slide.</p> */}
                    </div>
              </div>
            </div>
            <div className="carousel-item" >
              <div className="carousel-caption d-none d-md-block">
                <h3>Second Slide</h3>
                <p>This is a description for the second slide.</p>
              </div>
            </div>
            <div className="carousel-item" >
              <div className="carousel-caption d-none d-md-block">
                <h3>Third Slide</h3>
                <p>This is a description for the third slide.</p>
              </div>
            </div>
          </div>
        </div>
      </header>
    )
}

export default Carousel;
