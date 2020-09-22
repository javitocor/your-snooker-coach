import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';
import { TrainingsCall } from '../../helpers/APIcalls';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('async actions', () => {
  let store;
  const training = [{
    date: '2022-03-05', location: 'EN', player_id: 1, user_id: 1,
  }];
  beforeEach(() => {
    store = mockStore({});
  });
  afterEach(() => {
    nock.cleanAll();
  });

  it('creates getPlayer action', () => {
    nock('https://localhost:3000')
      .get('/api/v1/trainings')
      .reply(200, training);

    return store.dispatch(TrainingsCall())
      .then(() => {
        expect(store.getActions()).toMatchSnapshot();
      });
  });
});
