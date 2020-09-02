import { GET_ALL_PLAYERS, GET_PLAYER } from '../helpers/constants';

export const getAllPlayers = (data) => {
  type: GET_ALL_PLAYERS,
  data
}

export const getPlayer = (data) => {
  type: GET_PLAYER,
  data
};