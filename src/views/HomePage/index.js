import React from 'react';
// reactstrap components
import { Row, Col } from 'reactstrap';
import { Tween } from 'react-gsap';

import HomeFooter from 'components/HomeFooter';

import Header from '../../components/Header';

import './index.scss';
function HomePage() {

  const FadeInLeft = ({ children }) => (
    <Tween
      from={{ opacity: 0, transform: 'translate3d(-100vw, 0, 0)' }}
      ease="back.out(1.4)"
    >
      {children}
    </Tween>
  );


  return (
    <div className="">
      <Row>
        <Col className="background custom-content ">
          <Header />
          <Row className="body">
            <Col xs="8" className="center h-1-2 body">
              <FadeInLeft>
              <img src={require('assets/img/title.png')} />
              </FadeInLeft>
            </Col>
          </Row>
          <HomeFooter />
        </Col>
      </Row>
    </div>
  );
}

export default HomePage;
