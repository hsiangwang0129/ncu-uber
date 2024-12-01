import React from "react";
import  AuthProvider  from "./AuthProvider";
import GroupProvider from "./GroupProvider";

const AppProvider = ({ children }) => {
    return (
        <AuthProvider>
            <GroupProvider>
                {children}
            </GroupProvider>
        </AuthProvider>

        
    );
};

export default AppProvider;
