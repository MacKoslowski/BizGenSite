import React, { useState } from 'react';
import { Carousel, Row, Col, Container } from 'react-bootstrap';
import img1 from '../cityscape.png'
import img2 from '../stock_image.png'
import logo from '../bizgen_logo.png'
function Home() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  /*return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={img1}
        alt="First slide"
      />
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={img2}
        alt="Second slide"
      />

      <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>);*/

  return (
    <Container fluid style={{backgroundColor:"#f0f0f0", height:"100%"}}>
    <Row style={{textAlign:"center"}}>
      <Col sm={4} md={4}></Col>
      <Col s={12} sm={4} md={4}>
       <img
        src={logo}
        alt="React Bootstrap logo"
        style={{width:"14em"}}
      /><hr/></Col>
      <Col sm={4} md={4}></Col>
      
    </Row>
    <Row>
      <Col sm={2} md={2}></Col>
      <Col  s={12} sm={8} md={8}>
        <div style={{textAlign:"center"}}>
          <h3>
            We Offer A Full Range of Small Business
            and Commercial Financing Options For All Credit Types.
          </h3>
          <h5>
          We Creatively Bring Solutions To Give You The Best Business Loan Options.
          </h5>
        </div>
      </Col>
      <Col sm={2} md={2}></Col>
    </Row>
  </Container>
    
  );
}

export default Home;