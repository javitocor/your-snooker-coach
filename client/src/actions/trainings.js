import { GET_TRAININGS, GET_TRAININGS_PENDING, GET_TRAININGS_ERROR, CREATE_TRAINING, CREATE_TRAINING_PENDING, CREATE_TRAINING_ERROR  } from '../helpers/constants';

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