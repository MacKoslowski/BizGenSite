import React, { useState } from 'react';
import { Carousel, Row, Col, Container } from 'react-bootstrap';
import img1 from '../cityscape.png'
import img2 from '../stock_image.png'
import logo from '../bizgen_logo.png'
import {BsShop, BsFillLightbulbFill, BsCashCoin} from "react-icons/bs";
import Image from 'react-bootstrap/Image'
function Home() {

  return (
    <Container style={{height:"100%"}}>
      <Row  style={{textAlign:"center"}}>
        <img src={logo} className='imgStyle'/>
      </Row>
      <Row style={{textAlign:"center", marginTop:"5em"}}>
        <Col sm={12} md={4}>
          <BsShop size={145}/>
          <p className='iconDesc'>
            We offer a full range of small business and commercial financing options for all credit types.
          </p>
        </Col>
        <Col sm={12} md={4}>
          <BsFillLightbulbFill size={145}/>
          <p className='iconDesc'> 
            We Creatively Bring Solutions To Give You The Best Business Loan Options.
          </p>
        </Col>
        <Col sm={12} md={4}>
          <BsCashCoin size={145}/>
          <p className='iconDesc'>
          Let Us Do The Heavy Lifting And Save You Time And Money.
          </p>
        </Col>
        
      </Row>
   </Container>
    
  );
}

export default Home;