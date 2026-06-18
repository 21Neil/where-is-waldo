import { useState } from 'react';
import Counter from '../../component/Counter/Counter';
import Gameboard from '../../component/Gameboard/Gameboard';
import TargetList from '../../component/TargetList/TargetList';
import StartScreen from '../../component/StartScreen/StartScreen';
import LoadingSpinner from '../../component/LoadingSpinner/LoadingSpinner';
import FinishModal from '../../component/FinishModal/FinishModal';
import LeaderboardModal from '../../component/LeaderboardModal/LeaderboardModal';
import styles from './GameStage.module.css';
import gameService from '../../services/gameService';

const GameStage = ({ gameboardInfo, isImgLoaded, onRestart }) => {
  const [gameStarted, setGameStarted] = useState(false);
  const [foundTargetNames, setFoundTargetNames] = useState([]);
  const [isGameOver, setIsGameOver] = useState(false);
  const [isFinishModalOpen, setIsFinishModalOpen] = useState(false);
  const [score, setScore] = useState(0);
  const [isLeaderboardOpen, setIsLeaderboardOpen] = useState(false);
  const [isCheckingLocation, setIsCheckingLocation] = useState(false);
  const [userRank, setUserRank] = useState(null);

  const startGame = async () => {
    try {
      await gameService.startGame({ levelId: gameboardInfo.id });

      setGameStarted(true);
    } catch (e) {
      console.log(e);
    }
  };

  const gameOver = result => {
    setIsFinishModalOpen(true);
    setIsGameOver(result.isGameOver);
    setScore(result.duration);
  };

  const handleFinishModalSubmit = async data => {
    setIsFinishModalOpen(false);

    try {
      const res = await gameService.submitScore({ name: data.name });

      setUserRank(res)
      setIsLeaderboardOpen(true);
    } catch (e) {
      console.log(e);
    }
  };

  const handleViewLeaderboard = () => {
    setIsFinishModalOpen(false);
    setIsLeaderboardOpen(true);
  };

  return (
    <main className={isCheckingLocation ? styles.progress : ''}>
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
            gameOver,
            setIsCheckingLocation,
          }}
        />
      )}

      <TargetList targets={gameboardInfo.targets} {...{ foundTargetNames }} />

      <FinishModal
        levelId={gameboardInfo.id}
        onFinishModalSubmit={handleFinishModalSubmit}
        onViewLeaderboard={handleViewLeaderboard}
        {...{ isFinishModalOpen, score }}
      />

      <LeaderboardModal
        levelId={gameboardInfo.id}
        onRestart={onRestart}
        {...{ isLeaderboardOpen, userRank }}
      />
    </main>
  );
};

export default GameStage;
