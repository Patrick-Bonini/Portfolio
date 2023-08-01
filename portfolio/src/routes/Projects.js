import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImage2 from '../components/HeroImage2'
import ProjectCard from '../components/ProjectCard'

const Projects = () => {
  return (
    <div>
      <Navbar />
      <HeroImage2 heading="PROJECTS" text="Explore my software projects showcasing technical expertise and innovation"/>
      <ProjectCard />
      <Footer />
    </div>
  )
}

export default Projects