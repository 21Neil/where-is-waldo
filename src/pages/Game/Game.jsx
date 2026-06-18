import { useLoaderData } from 'react-router';
import { useEffect, useState } from 'react';
import GameStage from '../../component/GameStage/GameStage';

const Game = () => {
  const [isImgLoaded, setImgLoaded] = useState(false);
  const [gameKey, setGameKey] = useState(0);
  const gameboardInfo = useLoaderData();

  const handleRestart = () => {
    setGameKey(prev => prev + 1);
  };

  useEffect(() => {
    const img = new Image();
    img.src = gameboardInfo.imageUrl;

    img
      .decode()
      .then(() => {
        setImgLoaded(true);
      })
      .catch(err => {
        console.error('圖片載入失敗', err);
        setImgLoaded(true);
      });
  }, [gameboardInfo.imageUrl]);

  return (
    <>
      <GameStage key={gameKey} onRestart={handleRestart} {...{ gameboardInfo, isImgLoaded }} />
    </>
  );
};

export default Game;
