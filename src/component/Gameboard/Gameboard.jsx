import { useRef } from 'react';
import useDropdown from '../../hook/useDropdown/useDropdown';
import TargetMenu from '../TargetMenu/TargetMenu';
import styles from './Gameboard.module.css';

const Gameboard = ({
  gameboardInfo,
  foundTargetNames,
  setFoundTargetNames,
  gameOver,
  setIsCheckingLocation
}) => {
  const { open, close, visible, coord } = useDropdown();
  const gameboardRef = useRef();
  const menuRef = useRef();
  const cordRef = useRef({ x: 0, y: 0 });

  const handleOnClick = e => {
    if (visible) {
      cordRef.current = { x: 0, y: 0 };
      return close();
    }

    const rect = e.target.getBoundingClientRect();
    const gameboardRect = gameboardRef.current.getBoundingClientRect();
    const menuRect = menuRef.current.getBoundingClientRect();

    const x = e.clientX - rect.x;
    const y = e.clientY - rect.y;

    const xPct = (x / rect.width) * 100;
    const yPct = (y / rect.height) * 100;

    const menuWidth = menuRect.width;
    const menuHeight = menuRect.height;

    let menuX = x;
    let menuY = y;

    cordRef.current = { x: xPct, y: yPct };

    if (e.clientX + menuWidth > gameboardRect.width) menuX -= menuWidth;
    if (e.clientY + menuHeight > gameboardRect.height) menuY -= menuHeight;

    open(menuX, menuY);
  };

  return (
    gameboardInfo && (
      <div className={styles.gameboard} ref={gameboardRef}>
        <img
          src={gameboardInfo.imageUrl}
          alt="where's waldo beach"
          onClick={handleOnClick}
        />
        <TargetMenu
          ref={menuRef}
          {...{
            cordRef,
            foundTargetNames,
            setFoundTargetNames,
            gameOver,
            setIsCheckingLocation
          }}
          levelId={gameboardInfo.id}
          targets={gameboardInfo.targets}
          dropdown={{ close, visible, coord }}
        />
      </div>
    )
  );
};

export default Gameboard;
