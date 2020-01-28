import React from 'react'

const Footer = () => {
    return (
        <footer className="py-5 bg-dark">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <p className="m-0 text-left text-white"><a href="/About">About</a><br/><a href="/Services">Services</a><br/><a href="/Obesitycenter">Obesity Center</a><br/><a href="/Contact">Contact</a></p>
                    </div>
                    <div className="col-lg-4 offset-lg-4 address">
                    <a href="https://www.google.com/maps/place/Clark+Center+For+Comprehensive+Medicine+P.C./@42.3252396,-83.3350236,17z/data=!3m1!4b1!4m5!3m4!1s0x883b4b7c7288b29d:0xd6b0451b2a6124e9!8m2!3d42.3252396!4d-83.3328349"><p className="m-0 text-right text-white">Clark Center for Comprehensive Medicine <br/>29521 Ford Rd.<br/>Garden City, Michigan 48135</p></a>
                    </div>
                </div>
            </div>
            <a href="services copy.html"><p className="m-0 text-center text-white">Copyright &copy; Clark Center for Comprehensive Medicine 2019</p></a>
      </footer>
    )
}

export default Footer
