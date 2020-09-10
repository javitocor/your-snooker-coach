import { GET_ALL_PLAYERS, GET_ALL_PLAYERS_ERROR, GET_ALL_PLAYERS_PENDING, 
  GET_PLAYER, GET_PLAYER_ERROR, GET_PLAYER_PENDING,
  DELETE_PLAYER, DELETE_PLAYER_PENDING, DELETE_PLAYER_ERROR,
  UPDATE_PLAYER, UPDATE_PLAYER_PENDING, UPDATE_PLAYER_ERROR
 } from '../helpers/constants';

export const getAllPlayers = (playersList) => ({
  type: GET_ALL_PLAYERS,
  playersList
});

export const getAllPlayersPending = () => ({
  type: GET_ALL_PLAYERS_PENDING,
});

export const getAllPlayersError = (error) => ({
  type: GET_ALL_PLAYERS_ERROR,
  error
});

export const getPlayer = (player) => ({
  type: GET_PLAYER,
  player
});

export const getPlayerPending = () => ({
  type: GET_PLAYER_PENDING,
});

export const getPlayerError = (error) => ({
  type: GET_PLAYER_ERROR,
  error
});

export const deletePlayer = (player) => ({
  type: DELETE_PLAYER,
  player,
});

export const deletePlayerPending = () => ({
  type: DELETE_PLAYER_PENDING,
});

export const deletePlayerError = (error) => ({
  type: DELETE_PLAYER_ERROR,
  error
});

export const updatePlayer = (player) => ({
  type: UPDATE_PLAYER,
  player
});

export const updatePlayerPending = () => ({
  type: UPDATE_PLAYER_PENDING,
});

export const updatePlayerError = (error) => ({
  type: UPDATE_PLAYER_ERROR,
  error,
});