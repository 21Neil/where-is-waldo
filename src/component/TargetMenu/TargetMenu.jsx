import styles from './TargetMenu.module.css';

const TargetMenu = ({ coord }) => {
  return (
    <div
      className={styles.dropdownContainer}
      style={{ left: coord.x, top: coord.y }}
    >
      <button>Waldo</button>
    </div>
  );
};

export default TargetMenu;
