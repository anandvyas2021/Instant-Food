import React, { useState } from "react";
import { Layout } from "antd";

import Header from "container/Header";
import Cart from "cart/Cart";

// import Topbar from "../Topbar/index";
// import { footerText } from "util/config";

import App from "routes/index";

const { Content, Footer } = Layout;

const MainApp = (props) => {
    const [state, setState] = useState({ modal: false });
    const { match } = props;

    // const loading = false;

    console.log(props);
    console.log(match);

    const toggleCartModal = () => {
        setState({ modal: !state.modal });
    };

    return (
        <Layout className="gx-app-layout">
            <Layout>
                <Header toggleCartModal={toggleCartModal} />
                {state.modal && <Cart toggleCartModal={toggleCartModal} />}

                <Content className="gx-layout-content">
                    {/* {loading && (
            <div className="gx-loader-view">
              <CircularProgress />
            </div>
          )} */}
                    <App {...props} />
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
