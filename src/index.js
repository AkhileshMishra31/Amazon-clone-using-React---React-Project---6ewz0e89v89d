import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./components/App";
import { StateProvider } from "./Context/CartContext";
import  {reducer, initialState } from "./Context/CartReducer";





ReactDOM.render(
    <StateProvider reducer={reducer} initialState={initialState}>
        <App />
    </StateProvider>
    , document.getElementById("root")
);