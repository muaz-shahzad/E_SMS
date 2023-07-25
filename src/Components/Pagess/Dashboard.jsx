import React from "react";
import "/node_modules/bootstrap/dist/css/bootstrap-grid.css";
import "/node_modules/bootstrap/dist/css/bootstrap-grid.min.css";
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Navbar from '../Dashboard/Sections/Navbar';
import Section1 from '../Dashboard/Sections/Section1/Section1'
import Section2 from '../Dashboard/Sections/Section2/Section2'
import Section3 from "../Dashboard/Sections/Section3/Section3";

const Dashboard = () => {
    return (
        <>
            <Navbar />
            <Section1 />
            <Section2 />
            <Section3 />
            
        </>
    )
}

export default Dashboard