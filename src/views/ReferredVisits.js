import React from 'react';
import NotificationAlert from 'react-notification-alert';

// reactstrap components
import { Button, Card, CardHeader, CardBody, CardTitle, Row, Col, Input } from 'reactstrap';

function ReferredVisits() {
  const notificationAlertRef = React.useRef(null);
  return (
    <>
      <div className="content">
        <div className="react-notification-alert-container">
          <NotificationAlert ref={notificationAlertRef} />
        </div>
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Settings</CardTitle>
              </CardHeader>

              <CardBody>
                <Card
                  style={{
                    outline: 'auto'
                  }}
                >
                  <CardBody>
                    <Card>
                      <CardBody>
                        <Row>
                          <Col md="12">
                            <div
                              style={{
                                fontWeight: 'bold',
                                fontSize: '18px'
                              }}
                            >
                              Limit referred page views ?
                            </div>
                            <div
                              style={{
                                fontSize: '12px',
                                fontWeight: 'bold'
                              }}
                            >
                              Set page view quota for each user IP
                            </div>
                          </Col>
                        </Row>
                      </CardBody>
                    </Card>
                    <Card>
                      <CardBody>
                        <Row>
                          <Col md="6">
                            <Row>
                              <Col md="8">
                                <div
                                  style={{
                                    fontSize: '12px'
                                  }}
                                >
                                  Don't show Ads to the returning users who are ?
                                </div>
                                <div
                                  style={{
                                    fontSize: '10px'
                                  }}
                                >
                                  visiting via a previously used referral link. ?
                                </div>
                              </Col>
                              <Col md="4">
                                <Input type="checkbox" />
                              </Col>
                            </Row>
                          </Col>
                          <Col md="6">
                            <Row>
                              <Col md="6">
                                <div
                                  style={{
                                    fontSize: '12px'
                                  }}
                                >
                                  Reset the used referral link to
                                </div>
                                <div
                                  style={{
                                    fontSize: '10px'
                                  }}
                                >
                                  allow ads after (In days) ?
                                </div>
                              </Col>
                              <Col md="6">
                                <Input />
                              </Col>
                            </Row>
                          </Col>
                        </Row>
                      </CardBody>
                    </Card>
                  </CardBody>
                </Card>

                <Card>
                  <div>
                    <Button color="darkblue">Submit</Button>
                  </div>
                </Card>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default ReferredVisits;
