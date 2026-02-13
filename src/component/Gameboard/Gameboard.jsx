import { useRef } from 'react';
import useDropdown from '../../hook/useDropdown/useDropdown';
import TargetMenu from '../TargetMenu/TargetMenu';
import styles from './Gameboard.module.css';

const Gameboard = () => {
  const { open, close, visible, coord } = useDropdown();
  const gameboardRef = useRef();
  const menuRef = useRef();

  const handleOnClick = e => {
    if (visible) return close();
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

    console.log(xPct, yPct);
    if (e.clientX + menuWidth > gameboardRect.width) menuX -= menuWidth;
    if (e.clientY + menuHeight > gameboardRect.height) menuY -= menuHeight;

    open(menuX, menuY);
  };

  return (
    <div className={styles.gameboard} ref={gameboardRef}>
      <img
        src='https://pub-6c975cd2df9342cc9994b0776938af47.r2.dev/Wheres-Waldo-Beach.webp'
        alt="where's waldo beach"
        onClick={handleOnClick}
      />
      <TargetMenu ref={menuRef} {...{ coord, visible }} />
    </div>
  );
};

export default Gameboard;
