import { combineReducers } from 'redux';
import coachReducer from './coach';
import trainingsReducer from './trainings';

const rootReducer = combineReducers({
  coach: coachReducer,
  userTrainings: trainingsReducer
});

export default rootReducer;