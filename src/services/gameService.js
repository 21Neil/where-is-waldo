import { toggleGlobalLoading } from './apiState';

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

const customFetch = async (endpoint, option = {}, useLoading = true) => {
  try {
    if (useLoading) toggleGlobalLoading(true);

    // await new Promise(resolve => setTimeout(resolve, 1000))
    const res = await fetch(BASE_URL + endpoint, option);

    if (!res.ok) throw new Error('連線失敗: ' + res.status);

    return await res.json();
  } catch (err) {
    console.error('Fetch error: ', err);
    throw err;
  } finally {
    if (useLoading) toggleGlobalLoading(false);
  }
};

const apiGet = async (endpoint, useLoading) => customFetch(endpoint, undefined, useLoading);

const apiPost = async (endpoint, body, useLoading) =>
  customFetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
    credentials: 'include',
  }, useLoading);

const gameService = {
  startGame: body => apiPost('/game/start', body),
  checkLocation: body => apiPost('/game/check-location', body, false),
  submitScore: body => apiPost('/game/leaderboards', body),
  getLeaderboard: id => apiGet(`/game/leaderboards/${id}`),
  getLevels: () => apiGet('/game/levels'),
  getGameboard: id => apiGet(`/game/gameboard/${id}`),
};

export default gameService;
