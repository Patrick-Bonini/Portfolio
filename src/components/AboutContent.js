import "./AboutContentStyles.css"
import React from 'react'
import { NavLink } from "react-router-dom"
import Portrait from "../assets/Portrait.jpg"

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who Am I?</h1>
            <p>Motivated second year software engineering student @ uOttawa seeking winter 2024 internship opportunities | Python, Java, JavaScript, ReactJS, Flask</p>
            <NavLink to="https://drive.google.com/file/d/1VRYDjujI1cw3Fe-TGvDWPBQK0lpGXo0U/view?usp=sharing" target="blank"><button className="btn">Resume</button></NavLink>
        </div>
        <div className="right">
            <div className="img-container">
                <img src={Portrait} className="img" alt="true"></img>
            </div>
        </div>
    </div>
  )
}

export default AboutContent