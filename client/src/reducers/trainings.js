import { GET_TRAININGS, GET_TRAININGS_PENDING, GET_TRAININGS_ERROR, CREATE_TRAINING, CREATE_TRAINING_PENDING, CREATE_TRAINING_ERROR  } from '../helpers/constants';

const trainingsReducer = (state = initialStateTrainings, action) => {
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
    default:
      return state;
  }
};

export default trainingsReducer;