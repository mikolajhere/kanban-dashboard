import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import { Board } from "./components/Board";
import Home from "./pages/Home";
import { Register } from "./pages/Register";
import { Login } from "./pages/Login";

const Layout = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/board",
        element: <Board />,
      },
    ],
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
