import { DEV_URL } from './constants';

export const AllPlayersCall = () => async dispatch => {
  const Url = DEV_URL;
  try {
      dispatch(getAllPlayersPending());

    const response = await fetch(`${Url}/players`, { mode: 'cors' });
    const playersList = await response.json();
    dispatch(getAllPlayers(playerList));
    return playersList;
  } catch (error) {
      dispatch(getAllPlayersError(error));
  }
};

export const PlayerCall = () => async dispatch => {
  const Url = DEV_URL;
  try {
      dispatch(getPlayerPending());

    const response = await fetch(`${Url}/players/${id}`, { mode: 'cors' });
    const player = await response.json();
    dispatch(getPlayer(player));
    return player;
  } catch (error) {
      dispatch(getPlayerError(error));
  }
};