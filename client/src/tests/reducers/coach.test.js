import coachReducer from '../../reducers/coach';
import { initialStatePlayers, GET_ALL_PLAYERS, GET_PLAYER } from '../../helpers/constants';

describe('tests for coach reducer', () => {
  const data = { playersList: ['a', 'a'] };
  const result = {
    error: null,
    pending: false,
    player: {},
    playersList: { playersList: ['a', 'a'] },
  };
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
      player: { player: 'player' },
    });
  });
});
