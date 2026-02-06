import styles from './TargetList.module.css';

const TargetList = () => {
  return (
    <div className={styles.targetList}>
      <ul>
        <li>
          <img src='/src/assets/waldo.webp' alt='Waldo' />
        </li>
        <li>
          <img src='/src/assets/wanda.webp' alt='Wanda' />
        </li>
        <li>
          <img src='/src/assets/wizard.webp' alt='Wizard' />
        </li>
        <li>
          <img src='/src/assets/odlaw.webp' alt='Odlaw' />
        </li>
      </ul>
    </div>
  );
};

export default TargetList;
