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
                <a href="mailto:patrick.bonini13@gmail.com" target="_blank">
                    <button className="btn-small"><FaEnvelope
                        size={30}
                        style={{color: "white",
                        marginRight: "1rem" }}
                        />
                    </button>
                </a>
                <a href="https://www.linkedin.com/in/patrick-bonini" target="_blank">
                    <button className="btn-small"><FaLinkedin
                        size={30}
                        style={{color: "white",
                        marginRight: "1rem" }}
                        />
                    </button>
                </a>
                <a href="https://github.com/Patrick-Bonini" target="_blank">
                    <button className="btn-small"><FaGithub
                        size={30}
                        style={{color: "white",
                        marginRight: "1rem" }}
                        />
                    </button>
                </a>
                <a href="https://drive.google.com/file/d/1w6kfz3CdyJ5cEWoZku8l13PyYbHwVoIZ/view?usp=sharing" target="_blank">
                    <button className="btn-small"><FaUser
                        size={30}
                        style={{color: "white",
                        marginRight: "1rem" }}
                        />
                    </button>
                </a>
            </div>
        </div>
    </div>
  )
}

export default Footer