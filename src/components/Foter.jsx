import React, { Component } from 'react'
import { Jumbotron, Grid, Row, Col } from 'react-bootstrap';
import './foter.css';
 
class Foter extends React.Component{

  render() {
      return (
        <div className="footer-wrap">
      <Grid>
          <Row className="show-grid">
<Col xs={12} sm={3} className="one-fourth">
<img  alt="product" src="assets/footerlogo.png" /> 
<p> Waviz Technologies (P) Ltd. is an emerging Application Software Development and Outsourcing Company located in India and working around the globe.</p>

<ul>
  <li title="Facebook"> <i className="fa fa-facebook"></i>  </li>
  <li title="Twitter"> <i className="fa fa-twitter"></i> </li>
  <li title="linkedin"> <i className="fa fa-linkedin"></i> </li>
                    </ul>

  </Col>

<Col xs={12} sm={3} className="footer-links">
<h4> Expertise</h4>

<ul >
  <li><i className="fa fa-angle-right"></i> Mobility  </li>
  <li><i className="fa fa-angle-right"></i>  Big Data  </li>
  <li><i className="fa fa-angle-right"></i> Iot (Internet Of Thing) </li>
  <li><i className="fa fa-angle-right"></i>   Cloud Computing   </li>
   </ul>

  </Col>

  <Col xs={12} sm={3} className="footer-links">
<h4> ABOUT US</h4>
  <ul >
  <li><i className="fa fa-angle-right"></i> Our Companey  </li>
  <li><i className="fa fa-angle-right"></i> Why Choose Us  </li>
  <li><i className="fa fa-angle-right"></i> Approch </li>
  <li><i className="fa fa-angle-right"></i> Career  </li>
   </ul>
  </Col>


  <Col xs={12} sm={3} className="footer-links">
<h4> Contact Details</h4> <p>
<strong>Address:</strong> <br/> 
G-118, Second Floor, Sector 63,<br/> Noida – 201301 <br/>
                    <strong>Phone:</strong> +91-120-429-5252 <br/>
                    <strong>E-mail:</strong> info@waviz.com  <br/>
                    <strong>Website:</strong> www.waviz.com  <br/>  </p>
  </Col>


        </Row>
        </Grid>
         
        </div>
             
      )
  }

}

export default Foter;