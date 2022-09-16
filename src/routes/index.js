import React from "react";
import { useRoutes } from "react-router-dom";

const Home = React.lazy(() => import("./Home"));
const Search = React.lazy(() => import("./Search"));
const Offers = React.lazy(() => import("./Offers"));
const Account = React.lazy(() => import("./Account"));
const Help = React.lazy(() => import("./Help"));

const App = (props) => {
  let routes = useRoutes([
    {
      path: "/",
      element: <Home {...props} />,
    },
    {
      path: "/search",
      element: <Search {...props} />,
    },
    {
      path: "/offers",
      element: <Offers {...props} />,
    },
    {
      path: "/my-account",
      element: <Account {...props} />,
    },
    { path: "/my-account/:key", element: <Account {...props} /> },
    {
      path: "/support",
      element: <Help {...props} />,
    },
  ]);
  // return routes;
  return <React.Suspense fallback={<p>Loading</p>}>{routes}</React.Suspense>;
};

export default App;
