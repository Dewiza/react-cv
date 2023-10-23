import React from "react";

const Company = ({data}) => {
    return(
        <>
        {
            data.experience.map(exp => (
                <div className="company-wrapper">
                    <h3 className="company-name">{exp.companyName}</h3>
                    <p className="position">{exp.role}</p>
                    <p className="year">{exp.year}</p>
                    {exp.projects ? <p className="description"><span>Projects: </span>{exp.projects.join(', ')}</p> : ''}
                </div>
            )).reverse()
        }
        </>
    
    )
}

export default Company;