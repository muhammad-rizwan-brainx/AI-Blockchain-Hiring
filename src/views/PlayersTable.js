import { useEffect, useState } from 'react';
import { playersTableAction } from '../actions/playersTableAction';

import { Card, CardHeader, CardBody, CardTitle, Table, Row, Col } from 'reactstrap';

function PlayersTable() {
  const [playersTable, setPlayersTable] = useState([]);
  const [maxGangSize, setmaxGangSize] = useState(0);

  useEffect(() => {
    getPlayersTable();
  }, []);

  async function getPlayersTable() {
    const players = await playersTableAction();
    setPlayersTable(players);
    players.forEach((player) => {
      if (player.gang?.length > maxGangSize) {
        setmaxGangSize(player.gang?.length);
      }
    });
  }

  return (
    <div className="content">
      <Row>
        <Col md="12">
          <Card>
            <CardHeader>
              <CardTitle tag="h4">Players Table</CardTitle>
            </CardHeader>
            <CardBody>
              <Table className="tablesorter" responsive>
                <thead className="text-primary">
                  <tr>
                    <th>Name</th>
                    <th>Timezone</th>
                    <th>Total FP</th>
                    {[...Array(maxGangSize)].map((_, index) => (
                      <th key={index}>Capo {index + 1} name, fp</th>
                    ))}
                    <th>Update date</th>
                  </tr>
                </thead>
                <tbody>
                  {playersTable.map((player) => (
                    <tr key={player._id}>
                      <td>{player.name}</td>
                      <td>{player.timezone}</td>
                      <td>{player.totalFp}</td>
                      {[...Array(maxGangSize)].map((_, index) => (
                        <td key={index}>
                          {player.gang?.[index]?.name && player.gang?.[index]?.name + ', '}
                          {player.gang?.[index]?.fp}
                        </td>
                      ))}
                      <td>{player.updateDate.toISOString().split('T')[0]}</td>
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

export default PlayersTable;
