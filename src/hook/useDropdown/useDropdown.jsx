import { useState } from 'react';
import styles from './useDropdown.module.css';

const useDropdown = () => {
  const [visible, setVisible] = useState(false);
  const [coord, setCoord] = useState({ x: 0, y: 0 });

  const open = (x, y) => {
    setVisible(true);
    setCoord({ x, y });
  };
  const close = () => setVisible(false);

  const dropdown = (
    <div
      className={
        styles.dropdownContainer + (visible ? ` ${styles.visible}` : '')
      }
      style={{ left: coord.x, top: coord.y }}
    >
      <button>Waldo</button>
    </div>
  );

  return {
    open,
    close,
    visible,
    dropdown,
  };
};

export default useDropdown;
