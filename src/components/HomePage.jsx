import React from "react";
import AppProvider from "../context/AppProvider";
import GroupWrapper from "./GroupWrapper";
import Navbar from "./Navbar";
import SearchWrapper from "./SearchWrapper";

const HomePage = () => {
    return (
        <AppProvider>
            <Navbar></Navbar>
            <SearchWrapper></SearchWrapper>
            <GroupWrapper></GroupWrapper>
        </AppProvider>
    );
}

export default HomePage;