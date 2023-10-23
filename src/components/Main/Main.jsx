import React from "react";
import "./Main.scss";
import Company from "../Company/Company";

const Main = ({data}) => {
    return(
        <div className="main-wrapper">
            <Company data={data} />
        </div>
    )
}

export default Main;