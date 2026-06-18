export const formatTime = ms => {
  const minutes = Math.floor(ms / 60000);
  const seconds = Math.floor((ms % 60000) / 1000);
  const centiseconds = Math.floor((ms % 1000));

  return (
    minutes.toString().padStart(2, '0') +
    ':' +
    seconds.toString().padStart(2, '0') +
    '.' +
    centiseconds.toString().padStart(3, '0')
  );
};
