import React, { useRef } from 'react';
// reactstrap components
import { Row, Col } from 'reactstrap';
import { Tween } from 'react-gsap';

import LoginFooter from 'components/LoginFooter';
import Header from 'components/Header';
import LoginInput from 'components/LoginInput';

import './index.scss';
function LoginPage() {
 const loginRef = useRef(null);
  return (
    <div className="">
      <Row>
        <Col className="background custom-content ">
          <Header />
          <Row className="body">
            <Col xs="8" className="center h-1-2 body">
              <img src={require('assets/img/title.png')} />
            </Col>
          </Row>
          <LoginFooter />
        </Col>
        <Tween from={{ opacity: 0 }} duration={2}>
          <LoginInput ref = {loginRef}/>
        </Tween>
      </Row>


    </div>
  );
}

export default LoginPage;
