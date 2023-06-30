// import api from './apiAction';

export const playersTableAction = async () => {
  try {
    // const response = await api.get('/gang/characters');
    const response = {
      status: true,
      data: [
        {
          _id: '1',
          name: 'player 1 name',
          timezone: 'UTC +2',
          totalFp: 100,
          updateDate: new Date(),
          gang: [
            {
              name: 'capo 1',
              type: 'character',
              fp: 50
            },
            {
              name: 'capo 2',
              type: 'character',
              fp: 50
            }
          ]
        },
        {
          _id: '2',
          name: 'player 2 name',
          timezone: 'UTC +2',
          totalFp: 240,
          updateDate: new Date(),
          gang: [
            {
              name: 'capo 3',
              type: 'character',
              fp: 20
            },
            {
              name: 'capo 4',
              type: 'character',
              fp: 100
            },
            {
              name: 'capo 5',
              type: 'character',
              fp: 20
            },
            {
              name: 'capo 6',
              type: 'character',
              fp: 50
            },
            {
              name: 'capo 7',
              type: 'character',
              fp: 50
            }
          ]
        },
        {
          _id: '3',
          name: 'player 3 name',
          timezone: 'UTC +2',
          totalFp: 290,
          updateDate: new Date(),
          gang: [
            {
              name: 'capo 8',
              type: 'character',
              fp: 50
            },
            {
              name: 'capo 9',
              type: 'character',
              fp: 50
            },
            {
              name: 'capo 10',
              type: 'character',
              fp: 90
            },
            {
              name: 'capo 11',
              type: 'character',
              fp: 50
            },
            {
              name: 'capo 12',
              type: 'character',
              fp: 50
            }
          ]
        }
      ]
    };
    if (response.status) {
      const players = response.data;
      return players;
    } else {
      console.log('Action: playersTable failed ', response);
      return [];
    }
  } catch (err) {
    console.log('Action: playersTable error: ', err);
    return [];
  }
};
