import { createBrowserRouter, RouterProvider, Outlet, Navigate } from "react-router-dom";
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import HomePage from './pages/home';
import AboutPage from './pages/about';
import BooksPage from './pages/books';
import ContactPage from './pages/contactUs';
import Signup from './components/signup';
import Login from './components/login';
import toast, { Toaster } from 'react-hot-toast';
import { authUser } from './contex/authProvider';

// ScrollToTop component
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

// Protected Route Component
function ProtectedRoute({ children }) {
  const [user] = authUser(); // ✅ Changed 'User' to 'user' (lowercase)

  if (!user) {
    toast.error("Please login to access courses", {
      id: 'login-required', // ✅ Prevents duplicate toasts
    });
    return <Navigate to="/login" replace />;
  }

  return children;
}

// Layout component that wraps all pages
function Layout() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 text-black dark:text-white">
      <ScrollToTop />
      <Outlet />
      <Toaster />
    </div>
  );
}

const router = createBrowserRouter([
  {
    element: <Layout />, 
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/books",
        element: (
          <ProtectedRoute>
            <BooksPage />
          </ProtectedRoute>
        )
      },
      {
        path: "/contactUs",
        element: <ContactPage />
      },
      {
        path: "/signup",
        element: <Signup />
      },
      {
        path: "/login",
        element: <Login />
      }
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;