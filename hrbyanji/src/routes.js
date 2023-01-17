import { createBrowserRouter } from 'react-router-dom';
import { ProtectedRoute } from './components/ProtectedRoute';
import { Admin } from './screens/Admin';
import { Finance } from './screens/Finance';
import Home from './screens/Home';
import { HR } from './screens/HR';
import { EmployeeHiring } from './screens/HR/Hiring';
import { IT } from './screens/IT';
import { Login } from './screens/Login';
import { Sales } from './screens/Sales';

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
        path: 'admin',
        element: (
          <ProtectedRoute condition={() => localStorage.getItem('token')}>
            <Admin />
          </ProtectedRoute>
        ),
      },
      {
        path: 'hr',
        element: (
          <ProtectedRoute condition={() => localStorage.getItem('token')}>
            <HR />
          </ProtectedRoute>
        ),
      },
      {
        path: 'employeehiring',
        element: (
          <ProtectedRoute condition={() => localStorage.getItem('token')}>
            <EmployeeHiring />
          </ProtectedRoute>
        ),
      },
      {
        path: 'it',
        element: (
          <ProtectedRoute condition={() => localStorage.getItem('token')}>
            <IT />
          </ProtectedRoute>
        ),
      },
      {
        path: 'finance',
        element: (
          <ProtectedRoute condition={() => localStorage.getItem('token')}>
            <Finance />
          </ProtectedRoute>
        ),
      },
      {
        path: 'sales',
        element: (
          <ProtectedRoute condition={() => localStorage.getItem('token')}>
            <Sales />
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
