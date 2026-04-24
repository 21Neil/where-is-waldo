import { Outlet, useNavigation } from 'react-router';
import './App.css';
import Loading from './pages/Loading/Loading';

function App() {
  const navigation = useNavigation();
  const isNavigating = navigation.state === 'loading';

  return isNavigating ? <Loading /> : <Outlet />;
}

export default App;
