// src/components/Portfolio/Qualifications.js
import React from 'react';
import '../styles/qual.css'

import mwb from '../images/MWB.png'
import ptbadge from '../images/Intro2PT.png'
import dsbadge from '../images/intro2DS.png'
import cs from '../images/cs.jpg'


const Qualifications = () => {

  const QualCard = ({qualname, qualimage, description}) => {
    return (
      <div className="qual-card">
        <h4>{qualname}</h4>
        <img className='qual-image' src={qualimage} alt={qualname} />
        <label>{description}</label>
      </div>
    );
  };

  return (
    <div className="qual-container">
      <h2>Qualifications</h2>
      <div className="qual-list">        
        <QualCard qualname={"Computer Science Degree"} qualimage={cs} description={"Completed a 4-year Computer Science Degree course at the Murang'a University of Technology"}/>

        <QualCard qualname={"Ruby on Rails Certificate"} qualimage={mwb} description={"Completed a 3-month certification course on Ruby and Ruby on Rails Web development framework at Mentors Without Borders "}/>

        <QualCard qualname={"Data Science Certificate"} qualimage={dsbadge} description={"Completed a 3-month Data Science course offered by Cisco Academy"}/>

        <QualCard qualname={"Packet Tracer Certificate"} qualimage={ptbadge} description={"Completed a 3-month Packet Tracer course offered by Cisco Academy"}/>
      
      </div>
    </div>
  );
};

export default Qualifications;
