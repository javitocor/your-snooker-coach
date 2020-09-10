import trainingsReducer from '../../reducers/trainings';
import { initialStateTrainings, GET_TRAININGS, DELETE_TRAINING, UPDATE_TRAINING, GET_TRAININGS_PENDING, GET_TRAININGS_ERROR, CREATE_TRAINING, CREATE_TRAINING_PENDING, CREATE_TRAINING_ERROR  } from '../../helpers/constants';

describe('tests for trainings reducer', () => {
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
  test('delete a training', () => {
    const trainings = [
      {
        id: 1,
        name:'peter',
      },
      {
        id:2,
        name: 'john',
      }
    ];
    const training = {
      id: 1,
      name:'peter',
    }
    expect(trainingsReducer({
      error: null,
      pending: false,
      trainings: trainings,
      training: [],
    }, {
      type: DELETE_TRAINING,
      training: training,
    })).toEqual({
      error: null,
      pending: false,
      training: [],
      trainings: [{
        id:2,
        name: 'john',
      }]
    });
  });
  test('update a training', () => {
    const trainings = [
      {
        id: 1,
        name:'peter',
      },
      {
        id:2,
        name: 'john',
      }
    ];
    const training = {
      id: 1,
      name:'Alan',
    }
    expect(trainingsReducer({
      error: null,
      pending: false,
      trainings: trainings,
      training: [],
    }, {
      type: UPDATE_TRAINING,
      training: training,
    })).toEqual({
      error: null,
      pending: false,
      training: [],
      trainings: [{
        id: 1,
        name:'Alan',
      },
      {
        id:2,
        name: 'john',
      }]
    });
  });
});