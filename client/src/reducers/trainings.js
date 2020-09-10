import { initialStateTrainings, GET_TRAININGS, GET_TRAININGS_PENDING, GET_TRAININGS_ERROR, 
  CREATE_TRAINING, CREATE_TRAINING_PENDING, CREATE_TRAINING_ERROR,
  DELETE_TRAINING, DELETE_TRAINING_PENDING, DELETE_TRAINING_ERROR,
  UPDATE_TRAINING, UPDATE_TRAINING_PENDING, UPDATE_TRAINING_ERROR  } from '../helpers/constants';

const trainingsReducer = (state = initialStateTrainings, action) => {
  switch (action.type) {
    case GET_TRAININGS:
      return {
        ...state,
        pending: false,
        trainings: action.trainings,
      };
    case GET_TRAININGS_PENDING:
      return {
        ...state,
        pending: true,
      };
    case GET_TRAININGS_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error,
      };
      case CREATE_TRAINING:
      return {
        ...state,
        pending: false,
        training: action.training,
      };
    case CREATE_TRAINING_PENDING:
      return {
        ...state,
        pending: true,
      };
    case CREATE_TRAINING_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error,
      };
      case UPDATE_TRAINING:
        const newState = state.trainings.map(training => training.id === action.training.id ? action.training : training);
        return {
          ...state,
          trainings: newState,
        }
      case UPDATE_TRAINING_PENDING:
        return {
          ...state,
          pending: true,
        };
      case UPDATE_TRAINING_ERROR:
        return {
          ...state,
          pending: false,
          error: action.error,
        };
      case DELETE_TRAINING:
        return {
          ...state,
          trainings: state.trainings.filter(data => data.id !== action.training.id),
        }
      case DELETE_TRAINING_PENDING:
        return {
          ...state,
          pending: true,
        };
      case DELETE_TRAINING_ERROR:
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