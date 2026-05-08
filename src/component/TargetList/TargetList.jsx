import styles from './TargetList.module.css';

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
              src={`/src/assets/${target.name.toLowerCase()}.webp`}
              alt={target.name}
            />
            <span>Waldo</span>
          </li>
        ))}
      </ul>
    </footer>
  );
};

export default TargetList;
