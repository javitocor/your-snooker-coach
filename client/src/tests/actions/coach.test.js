import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';
import { PlayerCall } from '../../helpers/APIcalls';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('async actions', () => {
  let store;
  const player = [
    {
      name: 'Mark J Williams',
      nationality: 'Wales',
      born: '1975-03-21',
      firstseason: '1992',
      info: `Ranking titles: 22
      Triple Crown wins: Seven (Three World Championship, two UK Championships, two Masters)
      
      Career highlights
      
      1996: Wins his first two ranking titles, at the Welsh Open and Grand Prix
      1998: Beats Stephen Hendry 10-9 in the famous re-spotted black Masters final at Wembley
      1999: Wins the UK Championship for the first time
      2000: Wins his first World Championship title, coming from 13-7 down to beat Matthew Stevens 18-16 in an all-Welsh final
      2003: Wins second world title, beating Ken Doherty 18-16 in the Crucible final.  Becomes the third player, after Steve Davis and Stephen Hendry, to win the World, UK and Masters titles in the same season.
      2005: Makes his first 147 at the Crucible, worth a handy £161,000
      2011: Wins the 18th world ranking title of his career at the German Masters
      2017: Secures his first ranking event victory in six years at the Northern Ireland Open, beating Yan Bingtao 9-8 in the final
      2018: Wins the German Masters. Wins the World Championship for the third time, beating John Higgins 18-16 in one of the all-time great Crucible  finals. At the age of 43, becomes the oldest winner since Ray Reardon in 1978. Joins Mark Selby and John Spencer on three world titles. Wins the Yushan World Open in China, his 22nd career ranking title.
      
      `,
      image: 'http://snooker.org/img/players/MarkWilliams.png',
      ranking: 10,
      rate: '$ 154/hr',
    },
  ];
  beforeEach(() => {
    store = mockStore({});
  });
  afterEach(() => {
    nock.cleanAll();
  });

  it('creates getPlayer action', () => {
    nock('https://localhost:3000')
      .get('/api/v1/player/1')
      .reply(200, player);

    return store.dispatch(PlayerCall(1))
      .then(() => {
        expect(store.getActions()).toMatchSnapshot();
      });
  });
});
