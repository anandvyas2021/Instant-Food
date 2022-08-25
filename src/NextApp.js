import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import CartProvider from "store/CartProvider";
import App from "container/App";

// import NoRoute from "custom/NoRoute";
// import Meals from "components/meals/Meals";

export default function NextApp() {
    return (
        <CartProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="*" element={<App />} />
                    {/* <Route path="*" element={<NoRoute />} /> */}
                </Routes>

                {/* <Meals /> */}
            </BrowserRouter>
        </CartProvider>
    );
}

//can use ConnectedRouter instead of BrowserRouter.

//ConnectedRouter :-
//->used with Redux and can synchronize router state with a Redux store
//->history is stored in redux as immutable object

//BrowserRouter :-
//->standard React router for the browser to keep the UI in sync with the current URL.
