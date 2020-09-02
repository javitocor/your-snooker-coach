export const DEV_URL = 'https://localhost:3000/api/v1';

export const GET_ALL_PLAYERS = 'GET_ALL_PLAYERS';
export const GET_ALL_PLAYERS_ERROR = 'GET__PLAYERS_ERROR';
export const GET_ALL_PLAYERS_PENDING = 'GET_ALL_PLAYERS_PENDING';
export const GET_PLAYER = 'GET_PLAYER';
export const GET_PLAYER_ERROR = 'GET_PLAYER_ERROR';
export const GET_PLAYER_PENDING = 'GET_PLAYER_PENDING';


export const initialStatePlayers = {
  error: null,
  pending: false,
  playersList: [],
  player: [],
}

export const GET_TRAININGS = 'GET_TRAININGS';
export const GET_TRAININGS_PENDING = 'GET_TRAININGS_PENDING';
export const GET_TRAININGS_ERROR = 'GET_TRAININGS_ERROR';
export const CREATE_TRAINING = 'CREATE_TRAINING';
export const CREATE_TRAINING_PENDING = 'CREATE_TRAINING_PENDING';
export const CREATE_TRAINING_ERROR = 'CREATE_TRAINING_ERROR';

