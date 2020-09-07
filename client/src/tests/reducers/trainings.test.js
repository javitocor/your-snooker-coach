import trainingsReducer from '../../reducers/trainings';
import { initialStateTrainings, GET_TRAININGS, GET_TRAININGS_PENDING, GET_TRAININGS_ERROR, CREATE_TRAINING, CREATE_TRAINING_PENDING, CREATE_TRAINING_ERROR  } from '../../helpers/constants';

describe('tests for seasons reducer', () => {
  const data = {
    error: null,
    pending: false,
    trainings: [ 'trainings'],
    training: [],
  };
  const data2 = {
    error: null,
    pending: false,
    trainings: [ 'trainings'],
    training: ['new training'],
  };
  test('returns initial state', () => {
    expect(trainingsReducer(initialStateTrainings, {})).toEqual([]);
  });
  test('returns the state of trainings after handle the action', () => {
    expect(trainingsReducer(initialStateTrainings, {
      type: GET_TRAININGS,
      data,
    })).toEqual(data);
    expect(trainingsReducer(data, {
      type: GET_TRAININGS,
      data,
    })).toEqual([...data]);
  });
  test('returns the state of trainings after create a training the action', () => {
    expect(trainingsReducer(initialStateTrainings, {
      type: CREATE_TRAINING,
      data,
    })).toEqual(data2);
    expect(trainingsReducer(data2, {
      type: CREATE_TRAINING,
      data,
    })).toEqual([...data2]);
  });
});