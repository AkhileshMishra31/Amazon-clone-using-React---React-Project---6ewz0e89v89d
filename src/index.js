import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./components/App";
import { AuthContext, AuthProvider } from "./Context/AuthContext";
import { authreducer, authState } from "./Context/AuthReducer";
import { StateProvider } from "./Context/CartContext";
import { reducer, initialState } from "./Context/CartReducer";





ReactDOM.render(
    <StateProvider reducer={reducer} initialState={initialState}>
        <AuthProvider authreducer={authreducer} authState={authState}>
            <App />
        </AuthProvider>
    </StateProvider>
    , document.getElementById("root")
);