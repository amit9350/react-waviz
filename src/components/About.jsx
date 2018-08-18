import React, { Component } from 'react'
import { Grid, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './About.css';

export default class About extends Component {
  render() {
    return (
      <div>

 <div className="page-title"> 
 <Grid> 
 <Col xs={12} sm={6}  className="pagetitle-icon"> 
 <Image src="assets/about-logo.png" />
 <h1>About The Waviz</h1>
 </Col>
 <Col xs={12} sm={6} className="breadcrumbs text-right"><span>// YOU ARE HERE:</span> 
 <Link to="/"> HOME </Link>/ ABOUT US
  </Col>

    </Grid>
 
 </div>
        <Grid>
          <Col xs={12} sm={12}>
        
 <h3>Our Company</h3>
 <p>Waviz Technologies (P) Ltd is an emerging Application Software Development and Outsourcing Company 
   located in India and working around the globe. </p>
   <p>Our business module is very well defined and flexible in order to meet every requirement of client because of which our expertise and effective working methodology facilitates to deliver finest and best-of-breed solutions. Obeying
                            the company standards, we assure apposite risk administration, flawless workflow and deadline-oriented development.</p>

<p>A team at Waviz comprises of experienced and dynamic professionals full of enthusiasm who work round the clock to make us grow in every niche. We have endeavored to commit ourselves to providing quality solutions backed by the
  highest standards of development, working ethics and product quality. Our widespread knowledge in diverse aspects such as Mobility, Big Data and Hadoop, Third Party Integration, Open Source Development etc. makes us stand out
     of the crowd. Since the day of inception, we intended to deliver innovative design embedded with solid programming.</p> 

<h3>Why choose us </h3>

<h4>Skills Package </h4>
<p>We are well bundled with assortment of programming platforms. To meet the needs of your web, mobile or software projects, we are all set to turn your requirement into reality. Every phase of project development is monitored
                                by committed professional to make it error-free.</p>
 <h4>Energy Shell</h4>
 <p> In order to provide outstanding solutions, our professionals work eagerly for on-time delivery without burning your pockets.
    Our customer centric approach and full-cycle development approach followed by proper testing ensures success</p>
    <h4>Ethos Centric</h4>
    <p>We never overlook the importance of information that clients share while working with us. We keep our clients up to date as far as work is concerned so that they know exactly what is going on and are not in the dark about anything.</p>
    <h4>Knowledge Spreaders</h4>
    <p>While remaining tilt and mean, we are also engaged in providing knowledge in the form of training and workshops in several fortes. We also provide a dedicated team for human resources that help you to give a platform in field
                                of your interest. </p>
</Col>
        </Grid>
      </div>
    )
  }
}
