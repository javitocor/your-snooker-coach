import { GET_TRAININGS, GET_TRAININGS_PENDING, GET_TRAININGS_ERROR, 
  CREATE_TRAINING, CREATE_TRAINING_PENDING, CREATE_TRAINING_ERROR,
  DELETE_TRAINING, DELETE_TRAINING_PENDING, DELETE_TRAINING_ERROR,
  UPDATE_TRAINING, UPDATE_TRAINING_PENDING, UPDATE_TRAINING_ERROR
  } from '../helpers/constants';

export const getTrainings = (trainings) => ({
  type: GET_TRAININGS,
  trainings
});

export const getTrainingsPending = () => ({
  type: GET_TRAININGS_PENDING
});

export const getTrainingsError = (error) => ({
  type: GET_TRAININGS_ERROR,
  error,
});

export const createTraining = (training) => ({
  type: CREATE_TRAINING,
  training
});

export const createTrainingPending = () => ({
  type: CREATE_TRAINING_PENDING
});

export const createTrainingError = (error) => ({
  type: CREATE_TRAINING_ERROR,
  error
});

export const deletetraining = (training) => ({
  type: DELETE_TRAINING,
  training,
});

export const deletetrainingPending = () => ({
  type: DELETE_TRAINING_PENDING,
});

export const deletetrainingError = (error) => ({
  type: DELETE_TRAINING_ERROR,
  error
});

export const updatetraining = (training) => ({
  type: UPDATE_TRAINING,
  training
});

export const updatetrainingPending = () => ({
  type: UPDATE_TRAINING_PENDING,
});

export const updatetrainingError = (error) => ({
  type: UPDATE_TRAINING_ERROR,
  error,
});