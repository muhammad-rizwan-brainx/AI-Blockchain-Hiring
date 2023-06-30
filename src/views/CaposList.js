import { useEffect, useState, useCallback } from 'react';
import { loadCaposList } from '../actions/capoAction.js';
import Capo from '../widgets/Capo.js';

import { Card, CardHeader, CardBody, CardTitle, Table, Row, Col } from 'reactstrap';

function CaposList() {
  const [caposList, setCaposList] = useState([]);

  useEffect(() => {
    loadCapos();
  }, []);

  async function loadCapos() {
    const capos = await loadCaposList();
    setCaposList(capos);
  }

  const removeCapo = useCallback(
    (_id) => {
      const index = caposList.findIndex((capo) => capo._id === _id);
      caposList.splice(index, 1);
      setCaposList([...caposList]);
    },
    [caposList]
  );

  return (
    <div className="content">
      <Row>
        <Col md="12">
          <Card>
            <CardHeader>
              <CardTitle tag="h4">Capos Table</CardTitle>
            </CardHeader>
            <CardBody>
              <Table className="tablesorter" responsive>
                <thead className="text-primary">
                  <tr>
                    <th>avatar</th>
                    <th>name</th>
                    <th></th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {caposList.map((capo) => (
                    <Capo
                      key={capo._id}
                      _id={capo._id}
                      name={capo.Name}
                      imageUrl={capo.Image_url}
                      removeCapo={removeCapo}
                    />
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
export default CaposList;
