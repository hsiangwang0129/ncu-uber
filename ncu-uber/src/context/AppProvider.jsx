import React from "react";
import  AuthProvider  from "./AuthProvider";
import GroupProvider from "./GroupProvider";
import CoffeeMapProvider from "./CoffeeMapProvider";

const AppProvider = ({ children }) => {
    return (
        <AuthProvider>
            <GroupProvider>
                <CoffeeMapProvider>    
                {children}
                </CoffeeMapProvider>
            </GroupProvider>
        </AuthProvider>

        
    );
};

export default AppProvider;
