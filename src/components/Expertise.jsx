import React, { Component } from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

 
import './Expertise.css';

export default class News extends Component {
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
 <Link to="/"> EXPERTISE </Link>/ EXPERTISE
  </Col>

    </Grid>
 
 </div>
        <Grid>
 
          <Row>
            <Col xs={12} sm={9} className="main-section">
            <h3>Featured Services</h3>
            <p> @Waviz, We offer an integrated package of all services you might need in a Modern day business. We will promote your business as an IT partner. We have an attitude to deliver quality and we are flexible enough as per our customer requirements.
                    We have well defined set of processes which is the key in the success of our projects. We assist our Customers right form the very first step of finalizing requirements to understanding them to their execution then finally to successful
                    deployment. Its never easy for you to decide on a development partner for your software needs as it requires a careful consideration of evaluating all the involved risks and gains. </p>
                    <p>Needless to say that the success of any project depends upon the team and we @Waviz provide our customer with a team of technically highly qualified people with rich experience in the areas of Application development be it mobile based
                    application or web based application. </p>               
            </Col>
            <Col xs={12} sm={3} className="sidebar-section sidebar-box">
            <h3><i className="boxed fa fa-list"></i>Expertise</h3>
            <ul>
            <li><i className="fa fa-angle-right"></i> <Link to="/">Mobility</Link> </li>
            <li><i className="fa fa-angle-right"></i><Link to="/">Big Data</Link> </li>
            <li><i className="fa fa-angle-right"></i> <Link to="/">IOT (Internet of Thing)</Link> </li>
            <li><i className="fa fa-angle-right"></i> <Link to="/">Cloud Computing</Link> </li>
                    </ul>  
            

            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}
