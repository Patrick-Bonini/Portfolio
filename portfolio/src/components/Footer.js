import "./FooterStyles.css"
import React from 'react'
import { FaEnvelope, 
        FaLinkedin, 
        FaGithub, 
        FaUser
        } from "react-icons/fa"

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container"> 
            <p>© Patrick Bonini 2023</p>
            <div className="socials">
                <FaEnvelope
                    size={30}
                    style={{color: "white",
                    marginRight: "1rem" }}
                    />
                <FaLinkedin
                    size={30}
                    style={{color: "white",
                    marginRight: "1rem" }}
                    />
                <FaGithub
                    size={30}
                    style={{color: "white",
                    marginRight: "1rem" }}
                    />
                <FaUser
                    size={30}
                    style={{color: "white",
                    marginRight: "1rem" }}
                    />
            </div>
        </div>
    </div>
  )
}

export default Footer