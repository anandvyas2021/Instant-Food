import { Routes, Route } from "react-router-dom";

import Home from "./Home";
import Offers from "./Offers";
import Account from "./Account";
import Help from "./Help";

const App = ({ match }) => {
  return (
    <Routes>
      {/* <Route /> */}
      <Route path={`${match.url}`} element={<Home />} />
      <Route path={`${match.url}offers`} element={<Offers />} />
      <Route path={`${match.url}profile`} element={<Account />} />
      <Route path={`${match.url}support`} element={<Help />} />
    </Routes>
  );
};

export default App;
