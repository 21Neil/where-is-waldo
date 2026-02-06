import styles from './TargetMenu.module.css';

const TargetMenu = ({ coord }) => {
  return (
    <div
      className={styles.dropdownContainer}
      style={{ left: coord.x, top: coord.y }}
    >
      <ul>
        <li><button>Waldo</button></li>
        <li><button>Wanda</button></li>
        <li><button>wizard</button></li>
        <li><button>odlaw</button></li>
      </ul>
    </div>
  );
};

export default TargetMenu;
