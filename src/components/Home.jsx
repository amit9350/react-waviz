import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button, Carousel } from 'react-bootstrap';
import './Home.css';

export default class Home extends Component {
  render() {
    return (
      <div className="homewrap">
       <Carousel>
  <Carousel.Item>
    <img alt="900x500" src="assets/slide1.jpg" />
    <Carousel.Caption>
      <h3>Create Plateforming Apps</h3>
      <p>iPhone/iPad • Android • Cross platform</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img  alt="900x500" src="assets/slide2.jpg" />
    <Carousel.Caption>
      <h3>Cloud Computing</h3>
      <p>Virtualisation and Elasticity  as-a-service</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img  alt="900x500" src="assets/slide3.jpg" />
    <Carousel.Caption>
      <h3>Big Data And Analytics</h3>
      <p>Trasforming business through predictive analytics</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img  alt="900x500" src="assets/slide4.jpg" />
    <Carousel.Caption>
      <h3>Internet of thing</h3>
      <p>"Things" are managed by Waviz Products </p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>  
      <Grid>
     <div className="calltoaction"> 
     <Col xs={12} sm={9} className="tagline"> Add Technology to your Business <span>Stop waiting, Try it now!!?</span> 
     <p> Add Automation to your systems and reduce release turn out time    </p>
     </Col>
     <Col xs={12} sm={3} className="more-know">  <Link to="/"> KNOW MORE </Link></Col>
     
     </div>
        <Row className="show-grid text-center">
          <Col xs={12} sm={4} className="person-wrapper">
          
            <h3>Mobility <br/> Devlopment</h3>
            <p> Ecommerce, Travel,   Health and Education   Social Media and Identity Management   Device Management and Information Protection
                </p>
                <Link to="/"> READ MORE </Link>
          </Col>
          <Col xs={12} sm={4} className="person-wrapper">
            
            <h3>Cloud <br/> Computing</h3>
            <p>That's a crooked tree. We'll send him to Washington. These little son of a guns hide in your brush and you just have to push them out.</p>
            <Link to="/"> READ MORE </Link>
          </Col>
          <Col xs={12} sm={4} className="person-wrapper">
            
            <h3>Big Data & Analaytics <br/> Dashboard</h3>
            <p>That's a crooked tree. We'll send him to Washington. These little son of a guns hide in your brush and you just have to push them out.</p>
            <Link to="/"> READ MORE </Link>
          </Col>
        </Row>
      
      </Grid>
     <div className="product-wrap"> <Grid>
      <Row className="show-grid ">
        <Col xs={12} sm={6} className="product-image">  <img  alt="product" src="assets/product.png" /> </Col>

        <Col xs={12} sm={6} className="product-disc"> <h2>Product Design &amp; Development</h2>
        <h3>Delivering Agility through our Engineering!</h3>
        <p> We help customers, develop new products and create models that imitate real life, presenting technology with logical, technical and artistic merit. We design products, analyse them and anticipate the outcome, to deliver a viable, valuable
                        and validated product!</p>
                        <ul>
                        <li> Architecture design Prototyping</li>
                        <li>Development / Testing</li>
                        <li>UX Design</li>
                    </ul>
        
          </Col>
          </Row> 
               
          </Grid>
         </div>  

      <Grid>
        <Row className="show-grid text-center">
          <div className="devlopment-proces"> <h2> Development Process </h2> <h3>How We Do Our Thing</h3>
          
          <Col xs={12} sm={3} className="step"><img  alt="product" src="assets/Consult.png" /> <span>Step One </span> <h4>Consult </h4> </Col>

          <Col xs={12} sm={3} className="step"> <img  alt="product" src="assets/design.png" />  <span>Step Two </span> <h4> Design </h4> </Col>
          
          <Col xs={12} sm={3} className="step"> <img  alt="product" src="assets/development.png" /> <span>Step Three </span> <h4> Devlop </h4> </Col>

          <Col xs={12} sm={3} className="step"> <img  alt="product" src="assets/lift.png" /> <span>Step Four </span> <h4>Lift Off! </h4> </Col>

          </div>
            </Row>
          </Grid>  

        </div>
    )
  }
}
