import React from "react";
import "./Header.scss";
import UserImage from "../../images/user.png";

const Header = ({data}) => {
    return(
        <div className="container-fluid header">
            <div className="container">
                <div className="row">
                    <div className="image-wrapper">
                        <img src={UserImage} alt="" />
                    </div>
                    <div className="info">
                        <h1><span>{data.firstName}</span> <span>{data.lastName}</span></h1>
                        <h3>{data.role}</h3>
                        <p>{data.bio}</p>
                    </div>
                </div>
            </div>
        </div>
 
    )
}

export default Header;