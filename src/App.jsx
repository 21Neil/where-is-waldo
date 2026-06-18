import { Outlet } from 'react-router';
import './App.css';
import { useEffect, useState } from 'react';
import { registerLoadingListener } from './services/apiState';
import LoadingOverlay from './component/LoadingOverlay/LoadingOverlay';

function App() {
  const [globalLoading, setGlobalLoading] = useState(false);

  useEffect(() => {
    registerLoadingListener(setGlobalLoading);
  }, []);

  return (
    <>
      {globalLoading && <LoadingOverlay />}
      <Outlet />
    </>
  );
}

export default App;
