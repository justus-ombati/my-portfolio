// src/components/Portfolio/MyServices.js
import React from 'react';
import '../styles/myServices.css'
import webdesign from '../images/webdesign.png'
import backend from '../images/backend.png';
import frontend from '../images/frontend.png';
import uidesign from '../images/ui-ux.png';
import webdesignimage from '../images/web-designimage.jpg';
import backendimage from '../images/backendimage.jpg';
import frontendimage from '../images/frontendimage.jpg';
import uiuximage from '../images/ui-uximage.png';

const ServiceCard = ({ title, description, imageUrl, iconUrl }) => {
  return (
    <div id='card-div' className="service-card">      
      <div className="service-card-content">
        <div className='card-icon-div'> <img className='srvsicon' src={iconUrl} alt={title} /> </div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
        <img className='srvsimage' src={imageUrl} alt={title} />
    </div>
  );
};
const MyServices = (
) => {
  return (
    <div className="services-container">
      <h2>My Services</h2>
      <div className="service-cards-grid">
        <ServiceCard title={"Web Design"} iconUrl={webdesign} imageUrl={webdesignimage} />
        <ServiceCard title={"Backend API Development"} iconUrl={backend} imageUrl={backendimage} />
        <ServiceCard title={"Front-end Development"} iconUrl={frontend} imageUrl={frontendimage} />
        <ServiceCard title={"UI/UX Design"} iconUrl={uidesign} imageUrl={uiuximage} />
      </div>
    </div>
  );
};

export default MyServices;
