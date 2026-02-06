import styles from './TargetMenu.module.css';

const TargetMenu = ({ coord }) => {
  return (
    <div
      className={styles.container}
      style={{ left: coord.x, top: coord.y }}
    >
      <ul>
        <li><button>Waldo</button></li>
        <li><button>Wanda</button></li>
        <li><button>Wizard</button></li>
        <li><button>Odlaw</button></li>
      </ul>
    </div>
  );
};

export default TargetMenu;
