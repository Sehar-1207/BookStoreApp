import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import HomePage from './pages/home';
import AboutPage from './pages/about';
import BooksPage from './pages/books';
import ContactPage from './pages/contactUs';
import Signup from './components/signup';
import Login from './components/login';

// ScrollToTop component
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

// Layout component that wraps all pages
function Layout() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 text-black dark:text-white">
      <ScrollToTop />
      <Outlet /> {/* This renders the child routes */}
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
        element: <BooksPage />
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