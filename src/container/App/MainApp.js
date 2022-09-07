import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { Layout } from "antd";

import Header from "container/Header";
import Cart from "cart/Cart";
import AddressDrawer from "components/AddressDrawer";

// import { footerText } from "util/config";
import App from "routes/index";

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

  //address drawer handlers
  const toggleAddressDrawer = () => {
    setState({ addressDrawer: !state.addressDrawer });
  };

  //cart modal handlers
  const toggleCartModal = () => {
    setState({ modal: !state.modal });
  };

  //filter drawer handlers
  const toggleFilterDrawer = () => {
    setState({ filterDrawer: !state.filterDrawer });
  };

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
