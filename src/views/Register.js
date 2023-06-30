import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { registerAction } from '../actions/authAction';
import { UncontrolledAlert, CardText, Card, CardBody, Row, Col, Input } from 'reactstrap';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    password: ''
  });
  const [registerResult, getRegisterResult] = useState('');

  const { email, username, password } = formData;

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    const res = await registerAction(email, username, password);
    getRegisterResult(res);
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
                Already have an account?
                <a href="/login">Log in</a>
              </p>
            </div>
            {registerResult === 'false' && (
              <UncontrolledAlert color="danger">
                <span>{'Username or Email is not available.'}</span>
              </UncontrolledAlert>
            )}
            {registerResult === 'true' && (
              <UncontrolledAlert color="info">
                <span>{'Registration success!'}</span>
              </UncontrolledAlert>
            )}
            <div className="card-description">
              <form className="form" onSubmit={onSubmit}>
                <div className="form-group">
                  <Input
                    type="email"
                    placeholder="Email Address"
                    name="email"
                    value={email}
                    onChange={onChange}
                  />
                </div>
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
                <Input type="submit" className="btn btn-primary" value="Sign Up" />
              </form>
            </div>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default Login;
