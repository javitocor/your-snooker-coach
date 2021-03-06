export const DEV_URL = 'http://localhost:3000/api/v1/';
export const PROD_URL = 'api/v1/';

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
  player: {},
};

export const GET_TRAININGS = 'GET_TRAININGS';
export const GET_TRAININGS_PENDING = 'GET_TRAININGS_PENDING';
export const GET_TRAININGS_ERROR = 'GET_TRAININGS_ERROR';
export const CREATE_TRAINING = 'CREATE_TRAINING';
export const CREATE_TRAINING_PENDING = 'CREATE_TRAINING_PENDING';
export const CREATE_TRAINING_ERROR = 'CREATE_TRAINING_ERROR';

export const initialStateTrainings = {
  error: null,
  pending: false,
  trainings: [],
  training: [],
};

export const locations = [
  'The Crucible Theatre, Sheffield, EN',
  'York Barbican, York, EN',
  'Alexandra Palace, London, EN',
  'Marshall Arena, Milton Keynes, EN',
  'Cheltenham Racecourse, Cheltenham, EN',
  'Yushan Sport Centre, Yushan, CH',
  'Motorpoint Arena, Cardiff, SCO',
  'Haikou Stadium, CH',
  'Blackpool Tower, Blackpool, EN',
  'Beijing University, Beijing, CH',
  'Venue Cymru, Llandudno, WAL',
  'Grand Hyatt Mumbai, Mumbai, IND',
];
