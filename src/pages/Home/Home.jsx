import { Link, useLoaderData } from 'react-router';
import styles from './Home.module.css';

const Home = () => {
  const allLevels = useLoaderData();

  return (
    <main className={styles.home}>
      <div className={styles.header}>
        <h1>Where's Waldo</h1>
      </div>

      <div className={styles.btnContainer}>
        {allLevels.map(level => (
          <Link className={styles.levelButton} key={level.id} to={'/game/' + level.id}>
            <span>{level.name}</span>
            <img src={level.thumbnailUrl} alt={`level ${level.name}`} />
          </Link>
        ))}
      </div>
    </main>
  );
};

export default Home;
