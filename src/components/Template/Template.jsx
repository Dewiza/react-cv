import React from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Sidebar from "../Sidebar/Sidebar";
import "../scss/Base.scss";
import "./Template.scss";

const Template = ({data}) => {
    return (
        <div className="curriculum-vitae">
            <Header data={data} />
            <div className="container-fluid blue-bgc">
                <div className="container">
                    <div className="row">
                        <div className="sidebar">
                            <h3>Professional skills</h3>
                        </div>
                        <div className="main">
                            <h3>My Experience</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <Sidebar data={data} />
                    <Main data={data} />
                </div>
            </div>
        </div>
    )
}

export default Template;