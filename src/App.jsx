import './App.css';
import useDropdown from './hook/useDropdown/useDropdown';

function App() {
  const { open, close, visible, dropdown } = useDropdown();

  const handleOnClick = e => {
    if (visible) return close();
    const rect = e.target.getBoundingClientRect();

    const x = e.clientX - rect.x;
    const y = e.clientY - rect.y;

    const xPct = (x / rect.width) * 100;
    const yPct = (y / rect.height) * 100;

    console.log(xPct, yPct);
    open(x, y);
  };

  return (
    <>
      <main>
        <img
          src='https://pub-6c975cd2df9342cc9994b0776938af47.r2.dev/Wheres-Waldo-Beach.webp'
          alt="where's waldo beach"
          onClick={handleOnClick}
        />
      </main>
      {dropdown}
    </>
  );
}

export default App;
