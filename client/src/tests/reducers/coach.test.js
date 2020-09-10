import coachReducer from '../../reducers/coach';
import { initialStatePlayers, GET_ALL_PLAYERS, GET_PLAYER, DELETE_PLAYER, UPDATE_PLAYER } from '../../helpers/constants';


describe('tests for coach reducer', () => {
  const data = {playersList: ['a', 'a']};
  const result = {
    error: null,
    pending: false,
    player: {},
    playersList: {playersList: ['a', 'a']}
  }
  const data2 = {
    player: 'player',
  };
  test('returns initial state', () => {
    expect(coachReducer(initialStatePlayers, {})).toEqual(initialStatePlayers);
  });
  test('returns the state for all players after handle the action', () => {
    expect(coachReducer(initialStatePlayers, {
      type: GET_ALL_PLAYERS,
      playersList: data,
    })).toEqual(result);
  });
  test('returns the state for a single player after handle the action', () => {
    expect(coachReducer(initialStatePlayers, {
      type: GET_PLAYER,
      player: data2,
    })).toEqual({
      ...initialStatePlayers,
      player: {player: 'player'},
    });
  });
  test('delete a player', () => {
    const players = [
      {
        id: 1,
        name:'peter',
      },
      {
        id:2,
        name: 'john',
      }
    ];
    const player = {
      id: 1,
      name:'peter',
    }
    expect(coachReducer({
      error: null,
      pending: false,
      playersList: players,
      player: {},
    }, {
      type: DELETE_PLAYER,
      player: player,
    })).toEqual({
      error: null,
      pending: false,
      player: {},
      playersList: [{
        id:2,
        name: 'john',
      }]
    });
  });
  test('update a player', () => {
    const players = [
      {
        id: 1,
        name:'peter',
      },
      {
        id:2,
        name: 'john',
      }
    ];
    const player = {
      id: 1,
      name:'Alan',
    }
    expect(coachReducer({
      error: null,
      pending: false,
      playersList: players,
      player: {},
    }, {
      type: UPDATE_PLAYER,
      player: player,
    })).toEqual({
      error: null,
      pending: false,
      player: {},
      playersList: [{
        id: 1,
        name:'Alan',
      },
      {
        id:2,
        name: 'john',
      }]
    });
  });
});