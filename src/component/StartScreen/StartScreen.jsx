const StartScreen = ({ startGame }) => {
  return (
    <>
      <h1>Where's Waldo</h1>
      <button onClick={startGame}>Start</button>
    </>
  );
};

export default StartScreen;
