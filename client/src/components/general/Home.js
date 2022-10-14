import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Figure from 'react-bootstrap/Figure';
import './Home.css'
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
    
    return (
        <div className="container-fluid" >
                
            <Carousel>
                                <Carousel.Item interval={4000} >
                                    <img
                                    className='img-fluid shadow-4'
                                    src="https://picsum.photos/id/5/1700/600"
                                    alt="First slide"
                                    />
                                    <Carousel.Caption>
                                    <h3>First slide label</h3>
                                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item interval={4000}>
                                    <img
                                    className='img-fluid shadow-4'
                                    src="https://picsum.photos/id/6/1700/600"
                                    alt="Second slide"
                                    />
                                    <Carousel.Caption>
                                    <h3>Second slide label</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item interval={4000}>
                                    <img
                                    className='img-fluid shadow-4'
                                    src="https://picsum.photos/id/8/1700/600"
                                    alt="Third slide"
                                    />
                                    <Carousel.Caption>
                                    <h3>Third slide label</h3>
                                    <p>
                                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                                    </p>
                                    </Carousel.Caption>
                                </Carousel.Item>
            </Carousel>
            <section className="hero">
                    <div className="rowcon">
                        <div className="img">
                            <img src='https://d2cbg94ubxgsnp.cloudfront.net/Pictures/1024x536/9/9/2/511992_shutterstock_644976451.jpg' alt=" " />
                        </div>
                        <div className="content">
                            <span>Angaza Jamii</span>
                            <h2>We care about providing clean energy</h2>
                            <p>Are you in need of solar technology in your homes or in your business establishment? Reach out to us to apply for you to be connected to our technicians</p>
                            <button id="enr">Apply Now</button>
                            <button id="ex">Explore</button>
                        </div>           
                    </div>
            </section>
            <section className="ambulance">
                                <div>
                                <section className="desc">
                                    <div className="descc">
                                        <img src="https://exchange.nottingham.ac.uk/content/uploads/Teams-WIDEBANNER.png" alt=" " />
                                        <p className="feel">We care about your URLs 🔗<br />Need to shorten your URL? </p>
                                    </div>
                                </section>
                            </div>
            </section>
            
        </div>
               
        
    );
}

export default Home;