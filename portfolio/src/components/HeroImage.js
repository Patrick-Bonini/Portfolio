import HeroImageStyles from "./HeroImageStyles.css"
import React from 'react'
import HeroImg from "../assets/hero-bg.jpg"
import  { Link } from "react-router-dom"
import { FaEnvelope, FaLinkedin, FaGithub, FaIdCardAlt} from "react-icons/fa"

const HeroImage = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="hero-img" src={HeroImg} alt="HeroImg" />
        </div>
        <div className="content">
            <p>Hi, I'm Patrick Bonini</p>
            <h1>Software Engineering Student @ uOttawa</h1>
            <div>
                <Link to="/projects" className="btn">Projects</Link>
                <Link to="/about" className="btn btn-light">About</Link>
            </div>
        </div>
    </div>
  )
}

export default HeroImage