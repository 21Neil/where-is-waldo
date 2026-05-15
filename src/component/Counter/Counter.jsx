import { useEffect, useState } from 'react';
import styles from './Counter.module.css';
import { formatTime } from '../../utils/formatTime';

const Counter = ({ gameStarted, isGameOver }) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    let startTime;
    let timerId;

    if (gameStarted && !isGameOver) {
      startTime = Date.now();
      timerId = setInterval(() => {
        setCounter(Date.now() - startTime);
      }, 10);

      return () => {
        clearInterval(timerId)
      };
    }

  }, [gameStarted, isGameOver]);

  return <div className={styles.container}>{formatTime(counter)}</div>;
};

export default Counter;
