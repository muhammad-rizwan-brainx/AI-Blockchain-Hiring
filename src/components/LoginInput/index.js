import React from 'react';
// reactstrap components
import { Row, Col } from 'reactstrap';

import './index.scss';
const LoginInput = React.forwardRef((props, ref) => {
    return (
   
        <div className='background-cover' ref={ref} {...props}>
          <div className='relative' >
            <img src={require('assets/img/login_alert.png')} />
            <div className='absolute custom-input-content '>
              <input type="text" className='custom-input' placeholder='username'/>
              <input type="text" className='custom-input' placeholder='password'/>
            </div>
            <div className='absolute login-card '>
              <Row style={{display: "flex", justifyContent:'center', height:"100%"}}>
                <Col xs='3' className=' relative '>
                  <a className=''><img src={require('assets/img/submit_button.png')} className='absolute custom-button' style={{bottom: '-10px', left: 0, width: "100%"}}/></a>
                </Col>
              </Row>
            </div>
            
          </div>
        </div>
  );
})

LoginInput.displayName = "LoginInput";
export default LoginInput;
