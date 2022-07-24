import React from "react";
import Connect from "../components/Home/Connect";
import Landing from "../components/Home/Landing";
import Projects from "../components/Home/Projects";
import Stats from "../components/Home/Stats";
import Workshops from "../components/Home/Workshops";

const IndexPage = () => {
    return (
        <div className=''>
            <Landing />
            <Stats />
            <Workshops />
            <Projects />
            <Connect />
        </div>
    );
};

export default IndexPage;
