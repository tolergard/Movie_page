// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";
// import styled from "styled-components";
import {
  createHashRouter,
  Link,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Home from "./views/Home.jsx";
import Popular from "./views/Popular.jsx";
import Trending from "./views/Trending.jsx";
import Search from "./views/Search.jsx";

function Root() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/search">Search</Link>
          </li>
          <li>
            <Link to="/trending">Trending Movies</Link>
          </li>
          <li>
            <Link to="/popular">Popular TV-series</Link>
          </li>
        </ul>
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  );
}

function App() {
  const router = createHashRouter([
    {
      children: [
        { element: <Home />, path: "/" },
        { element: <Search />, path: "/search/" },
        { element: <Trending />, path: "/trending/" },
        { element: <Popular />, path: "/popular" },
      ],
      element: <Root />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
