import styles from './TargetMenu.module.css';
import { gameService } from '../../services/gameService';

const TargetMenu = ({
  ref,
  coord,
  visible,
  cordRef,
  close,
  foundTargetNames,
  setFoundTargetNames,
  levelId,
  targets,
}) => {
  const targetOnClick = async name => {
    const result = await gameService.checkLocation({
      name,
      levelId,
      x: cordRef.current.x,
      y: cordRef.current.y,
    });

    if (result.result) {
      setFoundTargetNames(result.foundTargetNames);
    }
    close();
  };

  return (
    <div
      className={`${styles.container} ${visible ? styles.visible : ''}`}
      style={{ left: coord.x, top: coord.y }}
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
