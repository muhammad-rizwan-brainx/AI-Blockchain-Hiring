import React from 'react';
import { Tween } from 'react-gsap';
// reactstrap components
import { Row, Col } from 'reactstrap';

import './index.scss';
function HomeFooter() {
  const FadeInLeft = ({ children }) => (
    <Tween
      from={{ opacity: 0, transform: 'translate3d(-100vw, 0, 0)' }}
      delay
      duration={2}
    >
      {children}
    </Tween>
  );

  return (
    <Row>
      <Col style={{ position: 'relative' }}>
        <FadeInLeft>
          <img src={require('assets/img/note1.png')} style={{ width: '100%' }} />
        </FadeInLeft>
        <Tween from={{ opacity: 0 }} duration={1}>
          <img
            src={require('assets/img/man.png')}
            className="man"
            style={{ position: 'absolute', right: 32, bottom: 0 }}
          />
        </Tween>
      </Col>
    </Row>
  );
}

export default HomeFooter;
