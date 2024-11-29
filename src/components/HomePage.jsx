import React from "react";
import GroupProvider from "./GroupProvider";
import GroupWrapper from "./GroupWrapper";
import Navbar from "./Navbar";
import SearchWrapper from "./SearchWrapper";

const HomePage = () => {
    return (
        <GroupProvider>
            <Navbar></Navbar>
            <SearchWrapper></SearchWrapper>
            <GroupWrapper></GroupWrapper>
        </GroupProvider>
    );
}

export default HomePage;