import React, { useState } from "react";
import { Layout } from "antd";

import Header from "container/Header";

// import Topbar from "../Topbar/index";
// import { footerText } from "util/config";

import App from "routes/index";

const { Content, Footer } = Layout;

const MainApp = (props) => {
  const { match } = props;
  const loading = false;

  console.log(match);
  return (
    <Layout className="gx-app-layout">
      <Layout>
        <Header />
        <Content className="gx-layout-content">
          {/* {loading && (
            <div className="gx-loader-view">
              <CircularProgress />
            </div>
          )} */}
          <App
            style={{ display: loading ? "none" : undefined }}
            match={match}
          />
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
