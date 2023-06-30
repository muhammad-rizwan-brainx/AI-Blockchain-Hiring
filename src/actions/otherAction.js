import api from './apiAction';

export const getTimeUntilGangWar = async () => {
  try {
    const cDate = new Date();
    let tDate = new Date();

    let targetDate;
    let curDay = tDate.getUTCDay();
    if (curDay >= 4) targetDate = tDate.getUTCDate() + 6 - curDay + 4;
    else targetDate = tDate.getUTCDate() + 4 - curDay;
    tDate.setUTCSeconds(0);
    tDate.setUTCMinutes(0);
    tDate.setUTCHours(0);
    tDate.setUTCDate(targetDate);

    const diffTime = (tDate.getTime() - cDate.getTime()) / 1000;

    const res = {
      days: Math.floor((diffTime / (3600 * 24)) % 31),
      hours: Math.floor((diffTime / 3600) % 24),
      minutes: Math.floor((diffTime / 60) % 60),
      seconds: diffTime % 60
    };
    return res;
  } catch (err) {
    const errors = err.response.data.errors;
    console.log(' getTimeUntilGangWar function error', errors);
    return false;
  }
};

export const getTotalNumbers = async () => {
  try {
    const ret = await api.post('/getTotalMembers');
    const res = ret.data;
    if (res.status === true) {
      return res.data;
    } else {
      console.log('Action: getTotalNumber failed: ', res.message);
      return false;
    }
  } catch (err) {
    const errors = err.response.data.errors;
    console.log(' getTotalNumber function error', errors);
    return false;
  }
};

export const getRankByFP = async () => {
  try {
    const ret = await api.post('/getRankByFP');
    const res = ret.data;
    if (res.status === true) {
      return res.data;
    } else {
      console.log('Action: getRankByFP failed: ', res.message);
      return false;
    }
  } catch (err) {
    const errors = err.response.data.errors;
    console.log(' getRankByFP function error', errors);
    return false;
  }
};

export const getTotalDefenseInfo = async () => {
  try {
    const ret = await api.get('/defense/total');
    const res = ret.data;
    if (res.status === true) {
      return res.data;
    } else {
      console.log('Action: TotalDefenseInfo failed: ', res.message);
      return false;
    }
  } catch (err) {
    const errors = err.response.data.errors;
    console.log(' TotalDefenseInfo function error', errors);
    return false;
  }
};

export const getTotalAttackInfo = async () => {
  try {
    const ret = await api.get('/attack/total');
    const res = ret.data;
    if (res.status === true) {
      return res.data;
    } else {
      console.log('Action: TotalAttackInfo failed: ', res.message);
      return false;
    }
  } catch (err) {
    const errors = err.response.data.errors;
    console.log(' TotalAttackInfo function error', errors);
    return false;
  }
};

export const getBuildingInfo = async () => {
  try {
    const ret = await api.get('/getBuildingInfo');
    const res = ret.data;
    if (res.status === true) {
      return res.data;
    } else {
      console.log('Action: TotalAttackInfo failed: ', res.message);
      return false;
    }
  } catch (err) {
    const errors = err.response.data.errors;
    console.log(' TotalAttackInfo function error', errors);
    return false;
  }
};
