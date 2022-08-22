import React, { memo, useEffect } from "react";
import { Route, Routes, useMatch, useLocation } from "react-router-dom";

// import SignIn from "../SignIn";
import MainApp from "./MainApp";

const App = (props) => {
  console.log("ok");
  console.log(window.location);
  const match = useLocation;
  // let match = window.location.pathname;
  console.log("ok again");
  console.log(match);

  return (
    <Routes>
      {/* <Route exact path="/signin" element={SignIn} /> */}
      <Route path={`${match.url}`} element={<MainApp />} />
    </Routes>
  );
};

export default memo(App);
