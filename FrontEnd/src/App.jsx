import "./App.css";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import AppLayout from "./components/Layout/AppLayout";
import ErrorPage from "./components/Pages/ErrorPage";
import Home from "./components/Pages/Home";
import About from "./components/Pages/About";
import Join from "./components/Pages/Join";
import Contact from "./components/Pages/Contact";
import Report from "./components/Pages/Report";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/report",
        element: <Report />,
      },
      {
        path: "/join",
        element: <Join />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);
const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
