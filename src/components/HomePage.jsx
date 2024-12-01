import React from "react";
import GroupProvider from "../context/GroupProvider";
import GroupWrapper from "./GroupWrapper";
import Navbar from "./Navbar";
import SearchWrapper from "./SearchWrapper";

const HomePage = () => {
    return (
        <>
            <Navbar></Navbar>
            <SearchWrapper></SearchWrapper>
            <GroupWrapper></GroupWrapper>
        </>
    );
}

export default HomePage;