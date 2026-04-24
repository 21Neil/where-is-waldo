import { useEffect, useState } from 'react';
import styles from './Counter.module.css';

const Counter = ({ gameStarted }) => {
  const [counter, setCounter] = useState(0);

  const formatTime = ms => {
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    const centiseconds = Math.floor((ms % 1000) / 10);

    return (
      minutes.toString().padStart(2, '0') +
      ':' +
      seconds.toString().padStart(2, '0') +
      '.' +
      centiseconds.toString().padStart(3, '0')
    );
  };

  useEffect(() => {
    let startTime;
    let timerId;

    if (gameStarted) {
      startTime = Date.now();
      timerId = setInterval(() => {
        setCounter(Date.now() - startTime);
      }, 10);

      return () => clearInterval(timerId);
    }
  }, [gameStarted]);

  return <div className={styles.container}>{formatTime(counter)}</div>;
};

export default Counter;
