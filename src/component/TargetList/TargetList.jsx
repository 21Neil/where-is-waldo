import styles from './TargetList.module.css';

const TargetList = ({ targetFound }) => {
  return (
    <footer className={styles.targetList}>
      <ul>
        <li className={targetFound.Waldo ? styles.found : ''}>
          <img src='/src/assets/waldo.webp' alt='Waldo' />
          <span>Waldo</span>
        </li>
        <li className={targetFound.Wanda ? styles.found : ''}>
          <img src='/src/assets/wanda.webp' alt='Wanda' />
          <span>Wanda</span>
        </li>
        <li className={targetFound.Wizard ? styles.found : ''}>
          <img src='/src/assets/wizard.webp' alt='Wizard' />
          <span>Wizard</span>
        </li>
        <li className={targetFound.Odlaw ? styles.found : ''}>
          <img src='/src/assets/odlaw.webp' alt='Odlaw' />
          <span>Odlaw</span>
        </li>
      </ul>
    </footer>
  );
};

export default TargetList;
