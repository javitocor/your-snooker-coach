import coachReducer from '../../reducers/coach';
import { initialStatePlayers, GET_ALL_PLAYERS, GET_PLAYER } from '../../helpers/constants';


describe('tests for coach reducer', () => {
  const data = {
    error: null,
    pending: false,
    playersList: [{player: 'player'}],
    player: {},
  };
  const data2 = {
    error: null,
    pending: false,
    playersList: [{player: 'player'}],
    player: {player2: 'player2'},
  };
  test('returns initial state', () => {
    expect(coachReducer(initialStatePlayers, {})).toEqual(initialStatePlayers);
  });
  test('returns the state for all players after handle the action', () => {
    expect(coachReducer(initialStatePlayers, {
      type: GET_ALL_PLAYERS,
      data,
    })).toEqual(data);
    expect(coachReducer(data, {
      type: GET_ALL_PLAYERS,
      data,
    })).toEqual([...data]);
  });
  test('returns the state for a single player after handle the action', () => {
    expect(coachReducer(initialStatePlayers, {
      type: GET_PLAYER,
      data,
    })).toEqual(data2);
    expect(coachReducer(data, {
      type: GET_PLAYER,
      data,
    })).toEqual([...data2]);
  });
});