import React, { useState } from 'react';
import ReactLoading from 'react-loading';

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardText,
  CardTitle,
  FormGroup,
  Form,
  Table,
  Row,
  Col
} from 'reactstrap';
import {
  getLevelResultAction,
  getPointResultAction,
  getAttackResultAction,
  getBuildingResultAction,
  updateLevelAction,
  updatePointAction,
  updateAttackAction,
  updateBuildingAction
} from '../actions/commandAction';
import config from '../config/config.js';

function TestCommand() {
  const [resDate, setResData] = useState('');
  const [typeOfCommand, setTypeOfCommand] = useState('');
  const [updatedDB, setUpdatedDB] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const ErrorMsg = 'Can not fetch data from Backend.';

  const init = () => {
    setError('');
    setLoading(true);
    setResData('');
    setUpdatedDB(false);
  };

  const execGetLevelCMD = async () => {
    init();
    setTypeOfCommand('Level');
    const ret = await getLevelResultAction();
    if (ret === false) setError(ErrorMsg);
    else setResData(ret);
    setLoading(false);
  };
  const execGetPointCMD = async () => {
    init();
    setTypeOfCommand('Point');
    const ret = await getPointResultAction();
    if (ret === false) setError(ErrorMsg);
    else setResData(ret);
    setLoading(false);
  };
  const execGetAttackCMD = async () => {
    init();
    setTypeOfCommand('Attack');
    const ret = await getAttackResultAction();
    if (ret === false) setError(ErrorMsg);
    else setResData(ret);
    setLoading(false);
  };
  const execGetBuildingCMD = async () => {
    init();
    setTypeOfCommand('Building');
    const ret = await getBuildingResultAction();
    if (ret === false) setError(ErrorMsg);
    else setResData(ret);
    setLoading(false);
  };

  const execLevelUpdateCMD = async () => {
    init();
    setTypeOfCommand('Level');
    const ret = await updateLevelAction();
    if (ret === false) setError(ErrorMsg);
    else setResData(ret);
    setLoading(false);
  };
  const execPointUpdateCMD = async () => {
    init();
    setTypeOfCommand('Point');
    const ret = await updatePointAction();
    if (ret === false) setError(ErrorMsg);
    else setResData(ret);
    setLoading(false);
  };
  const execAttackUpdateCMD = async () => {
    init();
    setTypeOfCommand('Attack');
    const ret = await updateAttackAction();
    if (ret === false) setError(ErrorMsg);
    else setResData(ret);
    setLoading(false);
  };
  const execBuildingUpdateCMD = async () => {
    init();
    setTypeOfCommand('Building');
    const ret = await updateBuildingAction();
    if (ret === false) setError(ErrorMsg);
    else setResData(ret);
    setLoading(false);
  };
  const Loading = () => (
    <ReactLoading type={'spinningBubbles'} color={'#e14eca'} height={'20%'} width={'20%'} />
  );

  return (
    <>
      <div className="content">
        <Row>
          <Col md="3">
            <Row>
              <Card>
                <CardHeader>
                  <h5 className="title">Get Latest Data From DB</h5>
                </CardHeader>
                <CardBody>
                  <Form>
                    <Row>
                      <Col className="pr-md-1" md="12">
                        <FormGroup>
                          <Button className="btn-fill" color="primary" onClick={execGetLevelCMD}>
                            @The Botfather level
                          </Button>
                        </FormGroup>
                        <FormGroup>
                          <Button className="btn-fill" color="primary" onClick={execGetPointCMD}>
                            @The Botfather point
                          </Button>
                        </FormGroup>
                        <FormGroup>
                          <Button className="btn-fill" color="primary" onClick={execGetAttackCMD}>
                            @The Botfather attack
                          </Button>
                        </FormGroup>
                        <FormGroup>
                          <Button className="btn-fill" color="primary" onClick={execGetBuildingCMD}>
                            @The Botfather building
                          </Button>
                        </FormGroup>
                      </Col>
                    </Row>
                  </Form>
                </CardBody>
              </Card>
            </Row>
            <Row>
              <Card>
                <CardHeader>
                  <h5 className="title">UpdateDB</h5>
                </CardHeader>
                <CardBody>
                  <Form>
                    <Row>
                      <Col className="pr-md-1" md="12">
                        <FormGroup>
                          <Button className="btn-fill" color="primary" onClick={execLevelUpdateCMD}>
                            Level Update
                          </Button>
                        </FormGroup>
                        <FormGroup>
                          <Button className="btn-fill" color="primary" onClick={execPointUpdateCMD}>
                            Point Update
                          </Button>
                        </FormGroup>
                        <FormGroup>
                          <Button
                            className="btn-fill"
                            color="primary"
                            onClick={execAttackUpdateCMD}
                          >
                            Attack Update
                          </Button>
                        </FormGroup>
                        <FormGroup>
                          <Button
                            className="btn-fill"
                            color="primary"
                            onClick={execBuildingUpdateCMD}
                          >
                            Building Update
                          </Button>
                        </FormGroup>
                      </Col>
                    </Row>
                  </Form>
                </CardBody>
              </Card>
            </Row>
          </Col>
          <Col md="9">
            <Card className="card-user">
              <CardBody>
                <CardTitle>
                  <CardTitle>
                    {updatedDB === false && <p>{typeOfCommand} data from DB</p>}
                    {updatedDB === true && <p>{typeOfCommand} Result from BotFather's channel</p>}
                  </CardTitle>
                </CardTitle>
                <CardText>
                  <Row>
                    <Col lg="12">
                      {loading && <center>{Loading()}</center>}
                      {error !== '' && (
                        <center>
                          <h4>{error}</h4>
                        </center>
                      )}
                      {typeOfCommand === 'Level' && loading !== true && resDate !== '' && (
                        <Card>
                          <CardBody>
                            <Table className="tablesorter">
                              <thead className="text-primary">
                                <tr>
                                  <th>Name</th>
                                  <th>Gang Members</th>
                                  <th>TOTAL FP</th>
                                </tr>
                              </thead>
                              <tbody>
                                {resDate.map((user) => (
                                  <tr key={user._id}>
                                    <td>
                                      <h3>{user.name}</h3>
                                    </td>
                                    <td>
                                      <Table>
                                        <tbody>
                                          <tr>
                                            {user.members.map((member) => (
                                              <td key={member._id}>
                                                <Row
                                                  style={{
                                                    width: '100',
                                                    height: '100',
                                                    margin: 'auto'
                                                  }}
                                                >
                                                  <img
                                                    alt=""
                                                    src={`${config.baseURL}/${member.img}`}
                                                  />
                                                </Row>
                                                <Row style={{ margin: 'auto' }}>{member.fp}</Row>
                                              </td>
                                            ))}
                                          </tr>
                                        </tbody>
                                      </Table>
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
                      )}
                      {typeOfCommand === 'Point' && loading !== true && resDate !== '' && (
                        <Card>
                          <CardBody>
                            <Table className="tablesorter">
                              <thead className="text-primary">
                                <tr>
                                  <th>Name</th>
                                  <th>DayPoints</th>
                                  <th>WeekPoints</th>
                                </tr>
                              </thead>
                              <tbody>
                                {resDate.map((user) => (
                                  <tr key={user._id}>
                                    <td>
                                      <h3>{user.name}</h3>
                                    </td>
                                    <td>
                                      <h3>{user.dayPoints}</h3>
                                    </td>
                                    <td>
                                      <h3>{user.weekPoints}</h3>
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </Table>
                          </CardBody>
                        </Card>
                      )}
                      {typeOfCommand === 'Attack' && loading !== true && resDate !== '' && (
                        <Card>
                          <CardBody>
                            <Table className="tablesorter">
                              <thead className="text-primary">
                                <tr>
                                  <th>Name</th>
                                  <th>Attack</th>
                                  <th>Defense</th>
                                </tr>
                              </thead>
                              <tbody>
                                {resDate.map((user) => (
                                  <tr key={user._id}>
                                    <td>
                                      <h3>{user.name}</h3>
                                    </td>
                                    <td>
                                      <h3>{user.attack}</h3>
                                    </td>
                                    <td>
                                      <h3>{user.defense}</h3>
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </Table>
                          </CardBody>
                        </Card>
                      )}
                      {typeOfCommand === 'Building' && loading !== true && resDate !== '' && (
                        <Card>
                          <CardBody>
                            <Row>
                              <Col>
                                <Table className="tablesorter">
                                  <thead className="text-primary">
                                    <tr>
                                      <th></th>
                                      <th>Your Gang</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    {resDate.your.map((user) => {
                                      if (user.status === 'true')
                                        return (
                                          <tr key={user._id}>
                                            <td>
                                              <h3>{user.name}</h3>
                                            </td>
                                            <td>
                                              <h5>Building still resisting</h5>
                                              <h5>
                                                Team: {user.team} Capo: {user.capo}
                                              </h5>
                                              <h5>Total fight power left: {user.tfp}</h5>
                                            </td>
                                          </tr>
                                        );
                                      else
                                        return (
                                          <tr key={user._id}>
                                            <td>
                                              <h3>{user.name}</h3>
                                            </td>
                                            <td>
                                              <h5>Building lost</h5>
                                            </td>
                                          </tr>
                                        );
                                    })}
                                  </tbody>
                                </Table>
                              </Col>
                              <Col>
                                <Table className="tablesorter">
                                  <thead className="text-primary">
                                    <tr>
                                      <th></th>
                                      <th>Your Gang</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    {resDate !== '' &&
                                      resDate.enemy.map((user) => {
                                        if (user.status === 'true')
                                          return (
                                            <tr key={user._id}>
                                              <td>
                                                <h3>{user.name}</h3>
                                              </td>
                                              <td>
                                                <h5>Building still resisting</h5>
                                                <h5>
                                                  Team: {user.team} Capo: {user.capo}
                                                </h5>
                                                <h5>Total fight power left: {user.tfp}</h5>
                                              </td>
                                            </tr>
                                          );
                                        else
                                          return (
                                            <tr key={user._id}>
                                              <td>
                                                <h3>{user.name}</h3>
                                              </td>
                                              <td>
                                                <h5>Building lost</h5>
                                              </td>
                                            </tr>
                                          );
                                      })}
                                  </tbody>
                                </Table>
                              </Col>
                            </Row>
                          </CardBody>
                        </Card>
                      )}
                    </Col>
                  </Row>
                </CardText>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default TestCommand;
