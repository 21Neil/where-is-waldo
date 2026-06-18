import styles from './TargetMenu.module.css';
import gameService from '../../services/gameService';

const TargetMenu = ({
  ref,
  dropdown,
  cordRef,
  foundTargetNames,
  setFoundTargetNames,
  levelId,
  targets,
  gameOver,
  setIsCheckingLocation,
}) => {
  const targetOnClick = async name => {
    dropdown.close();
    setIsCheckingLocation(true);

    const result = await gameService.checkLocation({
      name,
      levelId,
      x: cordRef.current.x,
      y: cordRef.current.y,
    });
    
    setIsCheckingLocation(false);
    
    if (result.result) {
      setFoundTargetNames(result.foundTargetNames);
      if (result.isGameOver) {
        gameOver(result);
      }
    }
  };

  return (
    <div
      className={`${styles.container} ${dropdown.visible ? styles.visible : ''}`}
      style={{ left: dropdown.coord.x, top: dropdown.coord.y }}
      ref={ref}
    >
      <ul>
        {targets.map(target => (
          <li key={target.name}>
            <button
              disabled={foundTargetNames.includes(target.name)}
              onClick={() => targetOnClick(target.name)}
            >
              {target.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TargetMenu;
