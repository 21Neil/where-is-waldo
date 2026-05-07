import styles from './TargetMenu.module.css';
import { gameService } from '../../services/gameService';

const TargetMenu = ({ ref, coord, visible, cordRef, levelId, close, setTargetFound }) => {
  const targetOnClick = async name => {
    const result = await gameService.checkLocation({
      name,
      levelId,
      x: cordRef.current.x,
      y: cordRef.current.y,
    });

    if (result.result) {
      setTargetFound(prev => ({
        ...prev,
        [name]: true,
      }));
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
        <li>
          <button onClick={() => targetOnClick('Waldo')}>Waldo</button>
        </li>
        <li>
          <button onClick={() => targetOnClick('Wanda')}>Wanda</button>
        </li>
        <li>
          <button onClick={() => targetOnClick('Wizard')}>Wizard</button>
        </li>
        <li>
          <button onClick={() => targetOnClick('Odlaw')}>Odlaw</button>
        </li>
      </ul>
    </div>
  );
};

export default TargetMenu;
