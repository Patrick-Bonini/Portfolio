import "./ProjectCardStyles.css"
import React from 'react'
import { NavLink } from "react-router-dom"

const ProjectCard = (props) => {
  return (
    <div className="project-card">
        <img src={props.imgsrc} alt="image"></img>
        <h2 className="project-title">{props.title}</h2>
        <div className="project-details">
            <p>{props.langs}</p>
            <p>{props.desc}</p>
            <div className="project-btns">
                <NavLink to={props.source} target="blank" className="btn">Source</NavLink>
            </div>
        </div>
    </div>
  )
}

export default ProjectCard