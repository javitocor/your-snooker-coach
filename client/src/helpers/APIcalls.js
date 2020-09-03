import { DEV_URL } from './constants';
import axios from 'axios';
import {getAllPlayersPending, getAllPlayers, getAllPlayersError, getPlayerPending, getPlayer, getPlayerError} from '../actions/coach';
import {getTrainingsPending, getTrainings, getTrainingsError, createTrainingPending, createTraining, createTrainingError }from '../actions/trainings'

export const AllPlayersCall = (token) => async dispatch => {
  const Url = DEV_URL;
  try {
      dispatch(getAllPlayersPending());

    const response = await fetch(`${Url}players`, { mode: 'cors' });
    /*const response = await axios.get(`http://localhost:3000/api/v1/players`);*/
    const playersList = await response.json();
    dispatch(getAllPlayers(playersList));
    return playersList;
  } catch (error) {
      dispatch(getAllPlayersError(error));
  }
};

export const PlayerCall = (id) => async dispatch => {
  const Url = DEV_URL;
  try {
      dispatch(getPlayerPending());

    const response = await fetch(`${Url}players/${id}`, { mode: 'cors' });
    const player = await response.json();
    dispatch(getPlayer(player));
    return player;
  } catch (error) {
      dispatch(getPlayerError(error));
  }
};

export const TrainingsCall = () => async dispatch => {
  const Url = DEV_URL;
  try {
      dispatch(getTrainingsPending());

    const response = await fetch(`${Url}trainings`, { mode: 'cors' });
    const trainings = await response.json();
    dispatch(getTrainings(trainings));
    return trainings;
  } catch (error) {
      dispatch(getTrainingsError(error));
  }
};

export const CreateTrainingsCall = (token, data) => async dispatch => {
  const Url = DEV_URL;
  try {
      dispatch(createTrainingPending());

    const response = await fetch(`${Url}trainings`, {
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
    return trainings;
  } catch (error) {
      dispatch(createTrainingError(error));
  }
};