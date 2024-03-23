import React from 'react';
import '../styles/MyPortfolioProjects.css'
import comcon from '../images/comconproj.gif';
import comconicon from '../images/developer.png';
import porfolioicon from '../images/layer.png'
import myportfolio from '../images/myportfolio.png'

const ProjectCard = ({ title, description, imageUrl, iconUrl, sourceCodeUrl }) => {
  return (
    <div id='card-div' className="project-card">      
      <div className="project-card-content">
        <div className='card-icon-div'> <img className='projicon' src={iconUrl} alt={title} /> </div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
        <img className='projimage' src={imageUrl} alt={title} />
    </div>
  );
};

const MyPortfolioProjects = () => {  
  return (
    <div className="projects-container">
      <h2>My Portfolio Projects</h2>
      <div className="project-cards-grid">
          <ProjectCard title="Com Connect" imageUrl={comcon} iconUrl={comconicon}/>
          <ProjectCard title="My Portfolio" iconUrl={porfolioicon} imageUrl={myportfolio} />
      </div>
    </div>
  );
};

export default MyPortfolioProjects;
