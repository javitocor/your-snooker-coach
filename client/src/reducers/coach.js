import {  } from '../helpers/constants';


const coachReducer = (state = [], action) => {
  switch (action.type) {
    case GET_ALL_PLAYERS:
      return [...action.data];
      case GET_PLAYER:
        return [...action.data];
    default:
      return state;
  }
};

export default coachReducer;