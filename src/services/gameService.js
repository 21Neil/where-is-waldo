const BASE_URL = import.meta.env.VITE_API_BASE_URL;

const apiPost = async (endpoint, body) => {
  try {
    const res = await fetch(BASE_URL + endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });

    if (!res.ok) throw new Error('連線失敗: ' + res.status);
    return await res.json();
  } catch (err) {
    console.error('Fetch error:', err);
    throw err;
  }
};

export const gameService = {
  startGame: async body => apiPost('/game/game-start', body),
  checkLocation: async body => apiPost('/game/check-location', body),
};
