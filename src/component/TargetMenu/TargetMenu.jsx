import styles from './TargetMenu.module.css';

const TargetMenu = ({ ref, coord, visible, cordRef, levelId }) => {
  const targetOnClick = async name => {
    const res = await fetch(
      import.meta.env.VITE_API_BASE_URL + '/game/check-location',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          levelId,
          x: cordRef.current.x,
          y: cordRef.current.y,
        }),
      },
    );

    const result = await res.json();
    console.log(result);
  };

  return (
    <div
      className={`${styles.container} ${visible ? styles.visible : ''}`}
      style={{ left: coord.x, top: coord.y }}
      ref={ref}
    >
      <ul>
        <li>
          <button onClick={() => targetOnClick('Waldo')}>Waldo</button>
        </li>
        <li>
          <button onClick={() => targetOnClick('Wanda')}>Wanda</button>
        </li>
        <li>
          <button onClick={() => targetOnClick('Wizard')}>Wizard</button>
        </li>
        <li>
          <button onClick={() => targetOnClick('Odlaw')}>Odlaw</button>
        </li>
      </ul>
    </div>
  );
};

export default TargetMenu;
