import React, { memo } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

// import SignIn from "../SignIn";
import MainApp from "./MainApp";

const App = (props) => {
  const location = useLocation();
  // console.log(location);
  // console.log(props);

  return (
    <Routes>
      {/* <Route exact path="/signin" element={SignIn} /> */}
      <Route path="*" element={<MainApp {...props} location={location} />} />
    </Routes>
  );
};

export default memo(App);
