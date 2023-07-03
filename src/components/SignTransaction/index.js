import React from 'react';
// reactstrap components
import { Row, Col } from 'reactstrap';
const ethers = require("ethers")
import './index.scss';
const SignTransaction = React.forwardRef((props, ref) => {
  const sign = async ()=>{
    try {
      await window.ethereum.enable();
  
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      await provider.send('eth_requestAccounts', []);
  
      const message = 'Hello, Ai-Blockchain!';
      const messageBytes = ethers.utils.toUtf8Bytes(message);
      const messageDigest = ethers.utils.keccak256(messageBytes);
  
      const signer = provider.getSigner();
      const signature = await signer.signMessage(messageDigest);
  
      console.log('Signature:', signature);

      const transaction = {
        to: signer.getAddress(),
        value: ethers.utils.parseEther('0'),
        data: messageDigest,
        gasLimit: 50000,
      };
  
      const response = await signer.sendTransaction(transaction);
      console.log('Transaction:', response);
    } catch (error) {
      console.error('Error signing message:', error);
    }
  }
  return (

    <div className='background-cover' ref={ref} {...props}>
      <div className='relative' >
        <img src={require('assets/img/login_alert.png')} />
        <div className='absolute custom-input-content '>
          <label>Hello, Ai-Blockchain!</label>
        </div>
        <div className='absolute login-card '>
          <Row style={{ display: "flex", justifyContent: 'center', height: "100%" }}>
            <Col xs='3' className=' relative '>
              <a className='' onClick={sign}><img src={require('assets/img/submit_button.png')} className='absolute custom-button' style={{ bottom: '-10px', left: 0, width: "100%" }} /></a>
            </Col>
          </Row>
        </div>

      </div>
    </div>
  );
})

SignTransaction.displayName = "SignTransaction";
export default SignTransaction;
