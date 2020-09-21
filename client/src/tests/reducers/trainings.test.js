import trainingsReducer from '../../reducers/trainings';
import { initialStateTrainings, GET_TRAININGS, GET_TRAININGS_PENDING, GET_TRAININGS_ERROR, CREATE_TRAINING, CREATE_TRAINING_PENDING, CREATE_TRAINING_ERROR  } from '../../helpers/constants';

describe('tests for seasons reducer', () => {
  const data =  {trainings:['trainings']};
  const result = {
    error: null,
    pending: false,
    trainings: {trainings:['trainings']},
    training: [],
  }
  const data2 = {
    training: ['new training'],
  };
  
  test('returns initial state', () => {
    expect(trainingsReducer(initialStateTrainings, {})).toEqual(initialStateTrainings);
  });
  test('returns the state of trainings after handle the action', () => {
    expect(trainingsReducer(initialStateTrainings, {
      type: GET_TRAININGS,
      trainings: data,
    })).toEqual(result);
  });
  test('returns the state of trainings after create a training the action', () => {
    expect(trainingsReducer(initialStateTrainings, {
      type: CREATE_TRAINING,
      training: data2,
    })).toEqual({
      ...initialStateTrainings,
      training: {training: ['new training']}
    });
  });
});