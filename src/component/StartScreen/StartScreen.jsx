import styles from './StartScreen.module.css'

const StartScreen = ({ startGame }) => {
  return (
    <div className={styles.container}>
      <button onClick={startGame}>Start</button>
    </div>
  );
};

export default StartScreen;
