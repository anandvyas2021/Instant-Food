import { useRoutes } from "react-router-dom";

import Home from "./Home";
import Offers from "./Offers";
import Account from "./Account";
import Help from "./Help";

const App = (props) => {
  let routes = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/offers",
      element: <Offers />,
    },
    {
      path: "/my-account",
      element: <Account />,
    },
    {
      path: "/support",
      element: <Help />,
    },
  ]);
  console.log(props);
  return routes;
};

export default App;
