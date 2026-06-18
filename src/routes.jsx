import App from './App';
import LoadingOverlay from './component/LoadingOverlay/LoadingOverlay';
import Error from './pages/Error/Error';
import Game from './pages/Game/Game';
import Home from './pages/Home/Home';
import Loading from './pages/Loading/Loading';
import gameService from './services/gameService';

const routes = [
  {
    path: '/',
    element: <App />,
    HydrateFallback: () => <LoadingOverlay />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: async () => {
          return await gameService.getLevels();
        },
      },
      {
        path: 'game/:id',
        element: <Game />,
        loader: async data => {
          return await gameService.getGameboard(data.params.id);
        },
      },
    ],
  },
];

export default routes;
