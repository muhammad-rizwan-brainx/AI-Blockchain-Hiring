import { useState } from 'react';
import { Input, Button, UncontrolledAlert } from 'reactstrap';
import Confirm from './Confirm.js';
import { updateCapoName, deleteCapo } from '../actions/capoAction.js';

const Capo = ({ _id, name, imageUrl, removeCapo }) => {
  const [currentName, setName] = useState(name);
  const [displayName, setDisplayName] = useState(name);
  const [updateResult, setUpdateResult] = useState('');
  const [deleteResult, setDeleteResult] = useState('');
  const [displayEdit, setDisplayEdit] = useState(false);
  const [displayLabel, setDisplaylabel] = useState(true);

  async function updateName() {
    const result = await updateCapoName(_id, currentName);
    if (result === 'true') {
      setDisplayName(currentName);
      toggleEditBox();
    }
    setUpdateResult(result);
  }

  async function _removeCapo() {
    const result = await deleteCapo(_id);
    setDeleteResult(result);
    removeCapo(_id);
  }

  function toggleEditBox() {
    setDisplaylabel((displayLabel) => !displayLabel);
    setDisplayEdit((displayEdit) => !displayEdit);
  }

  return (
    <tr>
      <td>
        <img height="100" width="100" src={`/data/img/capos/${imageUrl}`} alt="" />
      </td>
      <td>
        {displayLabel && (
          <>
            <span>{displayName}</span>
          </>
        )}
        {displayEdit && (
          <Input
            value={currentName}
            placeholder="Capo name"
            onChange={(e) => setName(e.target.value)}
          />
        )}
        {updateResult === 'false' && (
          <UncontrolledAlert color="danger">
            <span>{'Error during update!'}</span>
          </UncontrolledAlert>
        )}
      </td>
      <td>
        {displayEdit ? (
          <>
            <Button onClick={() => updateName()} outline size="sm">
              Save
            </Button>{' '}
            <Button onClick={toggleEditBox} outline size="sm">
              Cancel
            </Button>
          </>
        ) : (
          <Button outline size="sm" onClick={toggleEditBox}>
            Edit
          </Button>
        )}
      </td>
      <td>
        <Confirm
          buttonLabel="Delete"
          title="Deleting capo confirmation"
          text={`Delete ${currentName}?`}
          confirmFn={_removeCapo}
        />
        {deleteResult === 'false' && (
          <UncontrolledAlert color="danger">
            <span>{'Error!'}</span>
          </UncontrolledAlert>
        )}
      </td>
    </tr>
  );
};

export default Capo;
