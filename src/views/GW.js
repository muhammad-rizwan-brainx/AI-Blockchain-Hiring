import React, { useEffect, useState } from 'react';
// react plugin for creating notifications over the dashboard

// reactstrap components
import { Card, CardHeader, CardBody, Row, Col } from 'reactstrap';
import { getTotalDefenseInfo, getTotalAttackInfo, getBuildingInfo } from '../actions/otherAction';

function GW() {
  const [totalDefenseSet, setTotalDefenseSet] = useState(0);
  const [totalDefenseNotSet, setTotalDefenseNotSet] = useState(0);
  const [totalAttacked, setTotalAttacked] = useState(0);
  const [totalYetToAttacked, setTotalYetToAttacked] = useState(0);
  const [buildingRemaining, setBuildingRemaining] = useState(0);
  const [buildingCompleted, getBuildingCompleted] = useState(0);

  useEffect(() => {
    const getData = async () => {
      let res = await getTotalDefenseInfo();
      setTotalDefenseSet(res.set);
      setTotalDefenseNotSet(res.notSet);

      res = await getTotalAttackInfo();
      setTotalAttacked(res.set);
      setTotalYetToAttacked(res.notSet);

      res = await getBuildingInfo();
      setBuildingRemaining(res.you.remaining);
      getBuildingCompleted(res.you.completed);
    };
    getData();
  }, []);

  return (
    <div className="content">
      <Row>
        <Col lg="4">
          <Card className="card-user">
            <CardHeader>
              <h5 className="card-category">Gang War</h5>
            </CardHeader>
            <CardBody>
              <div className="author">
                <h2 className="title"> {totalDefenseSet} </h2>
                <p className="description">
                  {' '}
                  <i className="tim-icons icon-single-02 text-info" /> TOTAL DEFENSE SET
                </p>
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col lg="4">
          <Card className="card-user">
            <CardHeader>
              <h5 className="card-category">Gang War</h5>
            </CardHeader>
            <CardBody>
              <div className="author">
                <h2 className="title"> {totalDefenseNotSet}</h2>
                <p className="description">
                  {' '}
                  <i className="tim-icons icon-single-02 text-info" /> TOTAL DEFENSE NOT SET
                </p>
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col lg="4">
          <Card className="card-user">
            <CardHeader>
              <h5 className="card-category">Gang War</h5>
            </CardHeader>
            <CardBody>
              <div className="author">
                <h2 className="title"> {buildingRemaining} </h2>
                <p className="description">
                  {' '}
                  <i className="tim-icons icon-single-02 text-info" /> BUILDINGS REMAINING
                </p>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col lg="4">
          <Card className="card-user">
            <CardHeader>
              <h5 className="card-category">Gang War</h5>
            </CardHeader>
            <CardBody>
              <div className="author">
                <h2 className="title"> {totalAttacked} </h2>
                <p className="description">
                  {' '}
                  <i className="tim-icons icon-single-02 text-info" /> TOTAL ATTACKED
                </p>
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col lg="4">
          <Card className="card-user">
            <CardHeader>
              <h5 className="card-category">Gang War</h5>
            </CardHeader>
            <CardBody>
              <div className="author">
                <h2 className="title"> {totalYetToAttacked} </h2>
                <p className="description">
                  {' '}
                  <i className="tim-icons icon-single-02 text-info" /> TOTAL YET TO ATTACK
                </p>
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col lg="4">
          <Card className="card-user">
            <CardHeader>
              <h5 className="card-category">Gang War</h5>
            </CardHeader>
            <CardBody>
              <div className="author">
                <h2 className="title"> {buildingCompleted} </h2>
                <p className="description">
                  {' '}
                  <i className="tim-icons icon-single-02 text-info" /> BUILDINGS COMPLETED
                </p>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default GW;
