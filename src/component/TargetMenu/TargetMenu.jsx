import styles from './TargetMenu.module.css';

const TargetMenu = ({ ref, coord, visible }) => {
  return (
    <div
      className={`${styles.container} ${ visible ? styles.visible : ''}`}
      style={{ left: coord.x, top: coord.y }}
      ref={ref}
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
