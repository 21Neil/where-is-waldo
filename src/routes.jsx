import App from './App';
import Error from './pages/Error/Error';
import Game from './pages/Game/Game';
import Home from './pages/Home/Home';
import Loading from './pages/Loading/Loading';

const baseUrl = import.meta.env.VITE_API_BASE_URL;

const routes = [
  {
    path: '/',
    element: <App />,
    HydrateFallback: () => <Loading />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: async () => {
          return await fetch(baseUrl + '/game/all-levels');
        },
      },
      {
        path: 'game/:id',
        element: <Game />,
        loader: async data => {
          return await fetch(baseUrl + '/game/gameboard/' + data.params.id);
        },
      },
    ],
  },
];

export default routes;
