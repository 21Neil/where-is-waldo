import { useEffect, useState } from 'react';
import Modal from '../Modal/Modal';
import styles from './LeaderboardModal.module.css';
import modalStyles from '../Modal/ModalShare.module.css';
import gameService from '../../services/gameService';
import { Link } from 'react-router';
import { formatTime } from '../../utils/formatTime';

const LeaderboardModal = ({
  isLeaderboardOpen,
  levelId,
  onRestart,
  userRank,
}) => {
  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
    if (!isLeaderboardOpen) return;

    let ignore = false;

    const getLeaderboard = async () => {
      const leaderboard = await gameService.getLeaderboard(levelId);

      if (!ignore) {
        setLeaderboard(leaderboard);
      }
    };

    getLeaderboard();

    return () => {
      ignore = true;
      setLeaderboard([]);
    };
  }, [isLeaderboardOpen, levelId]);

  return (
    <Modal isOpen={isLeaderboardOpen} header={'Leaderboard'}>
      <div className={styles.listContainer}>
        <div className={styles.listHeader}>
          <span>Rank</span>
          <span>Name</span>
          <span>Time</span>
        </div>
        <ul className={styles.listBody}>
          {leaderboard.map((item, i) => (
            <li key={item.id}>
              <span>{i + 1}</span>
              <span>{item.name}</span>
              <span>{formatTime(item.score)}</span>
            </li>
          ))}
        </ul>
      </div>
      {userRank && (
        <p className={styles.userRank}>
          You ranked #<span>{userRank.rank}</span>! Your time is <span>{formatTime(userRank.score)}</span>
        </p>
      )}
      <div className={modalStyles.btnGroup}>
        <Link className={modalStyles.btn} to={'/'}>
          Back to Menu
        </Link>
        <button className={modalStyles.btn} type='button' onClick={onRestart}>
          Try Again
        </button>
      </div>
    </Modal>
  );
};

export default LeaderboardModal;
