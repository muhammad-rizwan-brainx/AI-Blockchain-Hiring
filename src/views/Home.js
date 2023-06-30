import React, { useEffect, useState } from 'react';
// reactstrap components
import { Card, CardHeader, CardBody, Row, Col, Table } from 'reactstrap';

import { getTotalNumbers, getTimeUntilGangWar, getRankByFP } from '../actions/otherAction';

function Home() {
  const [timeUntilGangWar, setTimeUntilGangWar] = useState(false);
  const [totalNumberGang, setTotalNumberGang] = useState(0);
  const [rankedData, setRankedData] = useState({});

  useEffect(() => {
    setTimeout(async () => {
      const res = await getTimeUntilGangWar();
      setTimeUntilGangWar(
        res.days + 'd ' + res.hours + 'h:' + res.minutes + 'm:' + res.seconds + 's'
      );
    }, 1000);
  });

  useEffect(() => {
    const getData = async () => {
      let res = await getTotalNumbers();
      if (res !== false) setTotalNumberGang(res);

      res = await getRankByFP();
      if (res !== false) setRankedData(res);
    };
    getData();
  }, []);

  return (
    <div className="content">
      <Row>
        <Col lg="4">
          <Row>
            <Card className="card-user">
              <CardBody>
                <div className="author">
                  <div className="block block-one" />
                  <div className="block block-two" />
                  <div className="block block-three" />
                  <div className="block block-four" />
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <img alt="..." className="avatar" src={require('assets/img/logo.webp')} />
                    <h2 className="title"> {timeUntilGangWar} </h2>
                  </a>
                  <p className="description">
                    {' '}
                    <i className="tim-icons icon-time-alarm text-info" /> Time until Gang War
                  </p>
                </div>
                <div className="card-description"></div>
              </CardBody>
            </Card>
          </Row>
          <Row>
            <Card className="card-user">
              <CardHeader>
                <h5 className="card-category">Gang War</h5>
              </CardHeader>
              <CardBody>
                <div className="author">
                  <h2 className="title"> {totalNumberGang} </h2>
                  <p className="description">
                    {' '}
                    <i className="tim-icons icon-single-02 text-info" /> Total number of Gang
                    Members
                  </p>
                </div>
              </CardBody>
            </Card>
          </Row>
        </Col>

        <Col md="8">
          <Card className="card-user">
            <CardHeader>
              <h5 className="card-category">
                <i className="tim-icons icon-single-02 text-info" />
                Rank by Firepower (Levels Command)
              </h5>
            </CardHeader>
            <CardBody>
              <Table className="tablesorter" responsive>
                <thead className="text-primary">
                  <tr>
                    <th>Name</th>
                    <th>TOTAL FP</th>
                  </tr>
                </thead>
                <tbody>
                  {Object.keys(rankedData).length > 0 &&
                    rankedData.map((user) => (
                      <tr key={user._id}>
                        <td>
                          <h3>{user.name}</h3>
                        </td>
                        <td>
                          <h3>{user.tfp}</h3>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </Table>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Home;
