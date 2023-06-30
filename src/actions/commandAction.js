import api from './apiAction';

// updateXAction functions send X command to server, store output to database and take response.
export const updateLevelAction = async () => {
  try {
    const ret = await api.post('/getLevel');
    const res = ret.data;
    if (res.status === true) {
      return res.data.Datas;
    } else {
      console.log('Action: update level failed: ', res.message);
      return false;
    }
  } catch (err) {
    const errors = err.response.data.errors;
    console.log(' updateLevelAction function error', errors);
    return false;
  }
};

export const updatePointAction = async () => {
  try {
    const ret = await api.post('/getPoint');
    const res = ret.data;
    if (res.status === true) {
      return res.data.Datas;
    } else {
      console.log('Action: update point failed: ', res.message);
      return false;
    }
  } catch (err) {
    const errors = err.response.data.errors;
    console.log(' updatePointAction function error', errors);
    return false;
  }
};

// send level command to server and take response.
export const updateAttackAction = async () => {
  try {
    const ret = await api.post('/getAttack');
    const res = ret.data;
    if (res.status === true) {
      return res.data.Datas;
    } else {
      console.log('Action: update attack failed: ', res.message);
      return false;
    }
  } catch (err) {
    const errors = err.response.data.errors;
    console.log(' updateAttackAction function error', errors);
    return false;
  }
};

// send level command to server and take response.
export const updateBuildingAction = async () => {
  try {
    const ret = await api.post('/getBuilding');
    const res = ret.data;
    if (res.status === true) {
      return res.data.Datas;
    } else {
      console.log('Action: update building failed: ', res.message);
      return false;
    }
  } catch (err) {
    const errors = err.response.data.errors;
    console.log(' Command function error', errors);
    return false;
  }
};

// GetXResultAction functions is to get X command's result from database.
// date -1 means latest updated result
export const getLevelResultAction = async (date = '-1') => {
  try {
    const ret = await api.post(`/getLevelResultFromDB`, { date });
    const res = ret.data;
    if (res.status === true) {
      return res.data.Datas;
    } else {
      console.log('Action: getLevelResultAction failed: ', res.message);
      return false;
    }
  } catch (err) {
    const errors = err.response.data.errors;
    console.log(' getLevelResultAction function error', errors);
    return false;
  }
};

export const getPointResultAction = async (date = '-1') => {
  try {
    const ret = await api.post('/getPointResultFromDB', { date });
    const res = ret.data;
    if (res.status === true) {
      return res.data.Datas;
    } else {
      console.log('Action: getPointResultAction failed: ', res.message);
      return false;
    }
  } catch (err) {
    const errors = err.response.data.errors;
    console.log(' getPointResultAction function error', errors);
    return false;
  }
};

export const getAttackResultAction = async (date = '-1') => {
  try {
    const ret = await api.post('/getAttackResultFromDB', { date });
    const res = ret.data;
    if (res.status === true) {
      return res.data.Datas;
    } else {
      console.log('Action: getAttackResultAction failed: ', res.message);
      return false;
    }
  } catch (err) {
    const errors = err.response.data.errors;
    console.log(' getAttackResultAction function error', errors);
    return false;
  }
};

export const getBuildingResultAction = async (date = '-1') => {
  try {
    const ret = await api.post('/getBuildingResultFromDB', { date });
    const res = ret.data;
    if (res.status === true) {
      return res.data.Datas;
    } else {
      console.log('Action: getBuildingResultAction failed: ', res.message);
      return false;
    }
  } catch (err) {
    const errors = err.response.data.errors;
    console.log(' getBuildingResultAction function error', errors);
    return false;
  }
};
