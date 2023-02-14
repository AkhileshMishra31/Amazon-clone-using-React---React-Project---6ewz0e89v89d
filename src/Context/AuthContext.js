import React, { createContext, useContext, useReducer } from "react";

// Prepares the dataLayer
export const AuthContext = createContext();

// Wrap our app and provide the Data layer
export const AuthProvider = ({ authreducer, authState, children }) => (
    <AuthContext.Provider value={useReducer(authreducer, authState)}>
        {children}
    </AuthContext.Provider>
);

// Pull information from the data layer
export const useStateAuth = () => useContext(AuthContext);