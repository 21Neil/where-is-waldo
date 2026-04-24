const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const gameService = {
  async startGame(levelId) {
    try {
      const res = await fetch(BASE_URL + '/game/game-start', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ levelId }),
      });

      if (!res.ok) throw new Error('連線失敗: ' + res.status);

      const data = await res.json();
      return data;
    } catch (err) {
      console.error('Fetch error:', err);
      throw err;
    }
  },
};
