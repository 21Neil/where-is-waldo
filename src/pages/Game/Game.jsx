import { useLoaderData } from 'react-router';
import Gameboard from '../../component/Gameboard/Gameboard';
import TargetList from '../../component/TargetList/TargetList';
import { useEffect, useState } from 'react';
import StartScreen from '../../component/StartScreen/StartScreen';
import { gameService } from '../../services/gameService';
import Counter from '../../component/Counter/Counter';
import LoadingSpinner from '../../component/LoadingSpinner/LoadingSpinner';
import styles from './Game.module.css';
import FinishModal from '../../component/FinishModal/FinishModal';

const Game = () => {
  const [isImgLoaded, setImgLoaded] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const [foundTargetNames, setFoundTargetNames] = useState([]);
  const [isGameOver, setIsGameOver] = useState(false);
  const [score, setScore] = useState(null);
  const gameboardInfo = useLoaderData();

  const startGame = async () => {
    setGameStarted(true);
    gameService.startGame({ levelId: gameboardInfo.id });
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
      <Counter {...{ gameStarted, isGameOver }} />

      {!isImgLoaded && (
        <div className={styles.loadingContainer}>
          <LoadingSpinner />
        </div>
      )}

      {!gameStarted && isImgLoaded && <StartScreen startGame={startGame} />}

      {gameStarted && (
        <Gameboard
          {...{
            gameboardInfo,
            foundTargetNames,
            setFoundTargetNames,
            setIsGameOver,
            setScore,
          }}
        />
      )}

      <TargetList targets={gameboardInfo.targets} {...{ foundTargetNames }} />

      <FinishModal {...{ isGameOver, score }} />
    </main>
  );
};

export default Game;
