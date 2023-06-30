import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { loginAction } from '../actions/authAction';

import { UncontrolledAlert, CardText, Card, CardBody, Row, Col, Input } from 'reactstrap';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [loginError, setLoginError] = useState('');

  const { username, password } = formData;

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log('Login Page: login button click');

    const res = await loginAction(username, password);
    if (res === false) setLoginError('Login failed. Username or Password failed');
    if (res === true) {
      history.push('/admin/home');
    }
  };

  let history = useHistory();
  const isAuthenticated = localStorage.getItem('user_id');
  if (isAuthenticated) {
    history.push('/admin/home');
  }

  return (
    <Row style={{ paddingTop: '4em' }}>
      <Col
        sm={{
          offset: 4,
          size: 4
        }}
      >
        <Card className="card-user">
          <CardBody>
            <CardText />
            <div className="author">
              <div className="block block-one" />
              <div className="block block-two" />
              <div className="block block-three" />
              <div className="block block-four" />
              <a href="#pablo" onClick={(e) => e.preventDefault()}>
                <img alt="..." className="avatar" src={require('assets/img/logo.webp')} />
                <h2 className="title">StreamLit Log in</h2>
              </a>
              <p className="description">
                <i className="fas fa-user" />
                Don't have an account?
                <a href="/register">Sign up.</a>
              </p>
            </div>
            {loginError && (
              <UncontrolledAlert color="danger">
                <span>The Username or password you entered is incorrect. Please try again.</span>
              </UncontrolledAlert>
            )}
            <div className="card-description">
              <form className="form" onSubmit={onSubmit}>
                <div className="form-group">
                  <Input
                    type="text"
                    placeholder="Username"
                    name="username"
                    value={username}
                    onChange={onChange}
                  />
                </div>
                <div className="form-group">
                  <Input
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={password}
                    onChange={onChange}
                    minLength="6"
                  />
                </div>
                <Input type="submit" className="btn btn-primary" value="Login" />
              </form>
            </div>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default Login;
