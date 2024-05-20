import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { AppProvider } from "./contextapi/ProductContext";
import { FilterContextProvider } from "./contextapi/Filter_context";
import { CartProvider } from "./contextapi/Cart_context";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
<AppProvider>
    <BrowserRouter>
        <FilterContextProvider>
            <CartProvider>
               <App />
            </CartProvider>
        </FilterContextProvider>
    </BrowserRouter>
</AppProvider>
 );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
