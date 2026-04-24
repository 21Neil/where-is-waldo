import { Link, useLoaderData } from 'react-router';

const Home = () => {
  const allLevels = useLoaderData();

  return (
    <main>
      <div>
        <h1>Where's Waldo</h1>
      </div>

      <div>
        {allLevels.map(level => (
          <Link key={level.id} to={'/game/' + level.id}>
            <button>{level.name}</button>
          </Link>
        ))}
      </div>
    </main>
  );
};

export default Home;
