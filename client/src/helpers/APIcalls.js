import { DEV_URL, PROD_URL } from './constants';
import {getAllPlayersPending, getAllPlayers, getAllPlayersError, getPlayerPending, getPlayer, getPlayerError,
  deletePlayer, deletePlayerPending, deletePlayerError, updatePlayer, updatePlayerPending, updatePlayerError
} from '../actions/coach';
import {getTrainingsPending, getTrainings, getTrainingsError, createTrainingPending, createTraining, createTrainingError }from '../actions/trainings'

export const AllPlayersCall = () => async dispatch => {
  const Url = PROD_URL;
  try {
      dispatch(getAllPlayersPending());

    const response = await fetch(`${PROD_URL}players`, { mode: 'cors' });
    const playersList = await response.json();
    dispatch(getAllPlayers(playersList));
    return playersList;
  } catch (error) {
      dispatch(getAllPlayersError(error));
  }
};

export const PlayerCall = (id) => async dispatch => {
  const Url = PROD_URL;
  try {
      dispatch(getPlayerPending());

    const response = await fetch(`${PROD_URL}players/${id}`, { mode: 'cors' });
    const player = await response.json();
    dispatch(getPlayer(player));
    return player;
  } catch (error) {
      dispatch(getPlayerError(error));
  }
};

export const PlayerUpdate = (id, data, token) => async dispatch => {
  const Url = PROD_URL;
  try {
      dispatch(updatePlayerPending());

    const response = await fetch(`${PROD_URL}players/${id}`, { 
      method: 'PUT',
      headers: {
        "Content-Type": "application/json",
        'X-Requested-With': 'XMLHttpRequest',
        'X-CSRF-Token': token
      },
      redirect: "error",
      body: JSON.stringify(data)
     });
    const player = await response.json();
    dispatch(updatePlayer(player));
    return player;
  } catch (error) {
      dispatch(updatePlayerError(error));
  }
};

export const PlayerDelete = (id, token) => async dispatch => {
  const Url = PROD_URL;
  try {
      dispatch(deletePlayerPending());

    const response = await fetch(`${PROD_URL}players/${id}`, { 
      method: 'DELETE',
      headers: {
        "Content-Type": "application/json",
        'X-Requested-With': 'XMLHttpRequest',
        'X-CSRF-Token': token
      },
     });
    const player = await response.json();
    dispatch(deletePlayer(player));
    return player;
  } catch (error) {
      dispatch(deletePlayerError(error));
  }
};


export const TrainingsCall = () => async dispatch => {
  const Url = PROD_URL;
  try {
      dispatch(getTrainingsPending());

    const response = await fetch(`${PROD_URL}trainings`, { mode: 'cors' });
    const trainings = await response.json();
    dispatch(getTrainings(trainings));
    return trainings;
  } catch (error) {
      dispatch(getTrainingsError(error));
  }
};

export const CreateTrainingsCall = (token, data) => async dispatch => {
  const Url = PROD_URL;
  try {
      dispatch(createTrainingPending());

    const response = await fetch(`${PROD_URL}trainings`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        'X-Requested-With': 'XMLHttpRequest',
        'X-CSRF-Token': token
      },
      redirect: "error",
      body: JSON.stringify(data)
    })
    const training = await response.json();
    dispatch(createTraining(training));
    return training;
  } catch (error) {
      console.log(error);
      dispatch(createTrainingError(error));
  }
};