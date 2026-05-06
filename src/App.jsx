import { Outlet, useNavigation } from 'react-router';
import './App.css';
import Loading from './component/LoadingSpinner/LoadingSpinner';

function App() {
  const navigation = useNavigation();
  const isNavigating = navigation.state === 'loading';

  return isNavigating ? <Loading /> : <Outlet />;
}

export default App;
