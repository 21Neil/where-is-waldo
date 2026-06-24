import styles from './TargetList.module.css';

const TARGET_AVATARS = {
  Waldo: 'https://pub-6c975cd2df9342cc9994b0776938af47.r2.dev/waldo.webp',
  Wanda: 'https://pub-6c975cd2df9342cc9994b0776938af47.r2.dev/wanda.webp',
  Wizard: 'https://pub-6c975cd2df9342cc9994b0776938af47.r2.dev/wizard.webp',
  Odlaw: 'https://pub-6c975cd2df9342cc9994b0776938af47.r2.dev/odlaw.webp',
};

const TargetList = ({ targets, foundTargetNames }) => {
  return (
    <footer className={styles.targetList}>
      <ul>
        {targets.map(target => (
          <li
            key={target.name}
            className={
              foundTargetNames.includes(target.name) ? styles.found : ''
            }
          >
            <img
              src={TARGET_AVATARS[target.name]}
              alt={target.name}
            />
            <span>{target.name}</span>
          </li>
        ))}
      </ul>
    </footer>
  );
};

export default TargetList;
