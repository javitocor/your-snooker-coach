export const DEV_URL = 'http://localhost:3000/api/v1/';
export const PROD_URL = 'api/v1/';

export const GET_ALL_TRAININGS = 'GET_ALL_TRAININGS';
export const GET_ALL_TRAININGS_ERROR = 'GET__TRAININGS_ERROR';
export const GET_ALL_TRAININGS_PENDING = 'GET_ALL_TRAININGS_PENDING';
export const GET_TRAINING = 'GET_TRAINING';
export const GET_TRAINING_ERROR = 'GET_TRAINING_ERROR';
export const GET_TRAINING_PENDING = 'GET_TRAINING_PENDING';
export const DELETE_TRAINING = 'DELETE_TRAINING';
export const DELETE_TRAINING_PENDING = 'DELETE_TRAINING_PENDING';
export const DELETE_TRAINING_ERROR = 'DELETE_TRAINING_ERROR';
export const UPDATE_TRAINING = 'UPDATE_TRAINING';
export const UPDATE_TRAINING_PENDING = 'UPDATE_TRAINING_PENDING';
export const UPDATE_TRAINING_ERROR = 'UPDATE_TRAINING_ERROR';


export const initialStateTRAININGs = {
  error: null,
  pending: false,
  TRAININGsList: [],
  TRAINING: {},
}

export const GET_TRAININGS = 'GET_TRAININGS';
export const GET_TRAININGS_PENDING = 'GET_TRAININGS_PENDING';
export const GET_TRAININGS_ERROR = 'GET_TRAININGS_ERROR';
export const CREATE_TRAINING = 'CREATE_TRAINING';
export const CREATE_TRAINING_PENDING = 'CREATE_TRAINING_PENDING';
export const CREATE_TRAINING_ERROR = 'CREATE_TRAINING_ERROR';
export const DELETE_TRAINING = 'DELETE_TRAINING';
export const DELETE_TRAINING_PENDING = 'DELETE_TRAINING_PENDING';
export const DELETE_TRAINING_ERROR = 'DELETE_TRAINING_ERROR';
export const UPDATE_TRAINING = 'UPDATE_TRAINING';
export const UPDATE_TRAINING_PENDING = 'UPDATE_TRAINING_PENDING';
export const UPDATE_TRAINING_ERROR = 'UPDATE_TRAINING_ERROR';

export const initialStateTrainings = {
  error: null,
  pending: false,
  trainings: [],
  training: [],
}

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
  'Grand Hyatt Mumbai, Mumbai, IND'
];

