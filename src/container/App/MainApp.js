import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { Layout } from "antd";

import { app } from "firebase-config";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

import Header from "container/Header";
import Cart from "cart/Cart";
import AddressDrawer from "components/AddressDrawer";
// import { footerText } from "util/config";
import App from "routes/index";

import { getAPI } from "utils/Api";

// const AddressDrawer = React.lazy(() => import("components/AddressDrawer"));
const FilterDrawer = React.lazy(() => import("components/FilterDrawer"));

const { Content, Footer } = Layout;

const MainApp = (props) => {
  const [state, setState] = useState({
    addressDrawer: false,
    modal: false,
    filterDrawer: false,
  });
  // const { match } = props;

  // console.log(props);
  // console.log(match);

  //toggle handlers
  const toggleAddressDrawer = () => {
    setState({ addressDrawer: !state.addressDrawer });
  };

  const toggleCartModal = () => {
    setState({ modal: !state.modal });
  };

  const toggleFilterDrawer = () => {
    setState({ filterDrawer: !state.filterDrawer });
  };

  const fetchAddresses = async () => {
    const response = await fetch(
      "https://instantfoodorder-default-rtdb.asia-southeast1.firebasedatabase.app/Addresses"
    );
    if (!response.ok) {
      throw new Error("Something Went Wrong!");
    }

    const responseData = await response.json();
    console.log(responseData);
  };

  useEffect(() => {
    // fetchAddresses();
    getAPI(
      "https://instantfoodorder-default-rtdb.asia-southeast1.firebasedatabase.app/Addresses"
    )
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    const bodyTag = document.getElementsByTagName("body").item(0);
    state.filterDrawer || state.addressDrawer
      ? bodyTag.classList.add(styles["bodyHidden"])
      : bodyTag.classList.remove(styles["bodyHidden"]);
  }, [state.filterDrawer, state.addressDrawer]);

  return (
    <Layout className="gx-app-layout">
      <Layout>
        <Header
          toggleAddressDrawer={toggleAddressDrawer}
          toggleCartModal={toggleCartModal}
        />
        {state.addressDrawer && (
          <AddressDrawer toggleAddressDrawer={toggleAddressDrawer} />
        )}
        {state.modal && <Cart toggleCartModal={toggleCartModal} />}

        <Content className="gx-layout-content">
          {/* {loading && (
            <div className="gx-loader-view">
              <CircularProgress />
            </div>
          )} */}
          <App {...props} toggleFilterDrawer={toggleFilterDrawer} />
          {state.filterDrawer && (
            <React.Suspense>
              <FilterDrawer toggleFilterDrawer={toggleFilterDrawer} />
            </React.Suspense>
          )}
        </Content>
        <Footer
          style={{
            // position: "fixed",
            // bottom: 0,
            // width: "100%",
            zIndex: 1,
          }}
        >
          {/* <div className="gx-layout-footer-content">{footerText}</div> */}
        </Footer>
      </Layout>
    </Layout>
  );
};

export default MainApp;
