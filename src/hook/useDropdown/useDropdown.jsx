import { useState } from 'react';

const useDropdown = () => {
  const [visible, setVisible] = useState(false);
  const [coord, setCoord] = useState({ x: 0, y: 0 });

  const open = (x, y) => {
    setVisible(true);
    setCoord({ x, y });
  };
  const close = () => setVisible(false);

  return {
    open,
    close,
    visible,
    coord
  };
};

export default useDropdown;
