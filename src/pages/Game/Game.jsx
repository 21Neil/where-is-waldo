import { useLoaderData } from 'react-router';
import Gameboard from '../../component/Gameboard/Gameboard';
import TargetList from '../../component/TargetList/TargetList';
import { useEffect, useState } from 'react';
import StartScreen from '../../component/StartScreen/StartScreen';
import Loading from '../Loading/Loading';
import { gameService } from '../../services/gameService';
import Counter from '../../component/Counter/Counter';

const Game = () => {
  const [isImgLoaded, setImgLoaded] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const gameboardInfo = useLoaderData();

  const startGame = async () => {
    setGameStarted(true);
    gameService.startGame(gameboardInfo.id);
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
    <main>
      <Counter gameStarted={gameStarted} />

      {!isImgLoaded && <Loading />}

      {!gameStarted && isImgLoaded && <StartScreen startGame={startGame} />}

      {gameStarted && (
        <Gameboard gameboardInfo={gameboardInfo} />
      )}
      
      <TargetList />
    </main>
  );
};

export default Game;
