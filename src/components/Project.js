import "./ProjectCardStyles.css"
import ProjectCard from "./ProjectCard"
import ProjectCardData from "./ProjectCardData"
import React from 'react'

const Project = () => {
  return (
    <div className="project-card-container">
        <h1 className="project-heading">Projects</h1>
        <div className="project-container">
            {ProjectCardData.map((val, index) => {
                return(
                    <ProjectCard 
                    key={index}
                    imgsrc={val.imgsrc}
                    title={val.title}
                    langs={val.langs}
                    desc={val.desc}
                    source={val.source}
                    />
                )
            })}
        </div>
    </div>
  )
}

export default Project