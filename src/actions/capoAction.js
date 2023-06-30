import api from './apiAction';

const loadCaposList = async () => {
  try {
    const response = (await api.get('/capos')).data;

    if (response.status) {
      const caposList = response.data;
      return caposList;
    } else {
      console.log('Action: capo/loadCaposList failed ', response);
      return [];
    }
  } catch (err) {
    console.log('Action: capo/loadCaposList error: ', err);
    return [];
  }
};

const updateCapoName = async (_id, name) => {
  try {
    const response = (await api.post(`/capos/update`, { id: _id, name })).data;
    if (response.status) {
      return 'true';
    }
    return 'false';
  } catch (err) {
    console.log(`Action: capo/updateCapoName, _id: ${_id} error: `, err);
    return 'false';
  }
};

const deleteCapo = async (_id) => {
  try {
    const response = (await api.post('/capos/delete', { id: _id })).data;
    if (response.status) {
      return 'true';
    }
    return 'false';
  } catch (err) {
    console.log(`Action: capo/deleteCapo, _id: ${_id} error: `, err);
    return 'false';
  }
};

export { loadCaposList, updateCapoName, deleteCapo };
