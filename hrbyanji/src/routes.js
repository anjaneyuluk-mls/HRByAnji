import { createBrowserRouter } from 'react-router-dom';
import { ProtectedRoute } from './components/ProtectedRoute';
import Home from './screens/Home';
import { Login } from './screens/Login';

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <ProtectedRoute condition={() => localStorage.getItem('token')}>
        <Home />
      </ProtectedRoute>
    ),
    children: [
      {
        path: '',
        element: (
          <ProtectedRoute condition={() => localStorage.getItem('token')}>
            <div>I am table</div>
          </ProtectedRoute>
        ),
      },
    ],
  },
  {
    path: 'login',
    element: <Login />,
  },
]);
