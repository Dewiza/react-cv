import React from "react";
import "./Sidebar.scss";

const Sidebar = ({data}) => {
    return(
        <div className="skill-wrapper">
            <ul>
                {data.skills.map(skill => <li>{skill}</li>)}
            </ul>
        </div>
    )
}

export default Sidebar;