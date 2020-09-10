import { GET_ALL_PLAYERS, GET_ALL_PLAYERS_ERROR, GET_ALL_PLAYERS_PENDING, 
  GET_PLAYER, GET_PLAYER_ERROR, GET_PLAYER_PENDING,
  DELETE_PLAYER, DELETE_PLAYER_PENDING, DELETE_PLAYER_ERROR,
  UPDATE_PLAYER, UPDATE_PLAYER_PENDING, UPDATE_PLAYER_ERROR
 } from '../helpers/constants';

const coachReducer = (state = initialStatePlayers, action) => {
  switch (action.type) {
    case GET_ALL_PLAYERS:
      return {
        ...state,
        pending: false,
        playersList: action.playersList,
      };
    case GET_ALL_PLAYERS_PENDING:
      return {
        ...state,
        pending: true,
      };
    case GET_ALL_PLAYERS_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error,
      };
      case GET_PLAYER:
      return {
        ...state,
        pending: false,
        player: action.player,
      };
    case GET_PLAYER_PENDING:
      return {
        ...state,
        pending: true,
      };
    case GET_PLAYER_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error,
      };
    case UPDATE_PLAYER:
      const newState = state.playersList.map(player => player.id === action.player.id ? action.player : player);
      return {
        ...state,
        playersList: newState,
      }
    case UPDATE_PLAYER_PENDING:
      return {
        ...state,
        pending: true,
      };
    case UPDATE_PLAYER_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error,
      };
    case DELETE_PLAYER:
      return {
        ...state,
        playersList: state.playersList.filter((data, i) => i !== action.player.id),
      }
    case DELETE_PLAYER_PENDING:
      return {
        ...state,
        pending: true,
      };
    case DELETE_PLAYER_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default coachReducer;