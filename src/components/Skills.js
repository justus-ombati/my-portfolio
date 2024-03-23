// src/components/Portfolio/Skills.js
import React from 'react';
import '../styles/skills.css'
import javascript from '../images/javascript.png'
import python from '../images/python.gif'
import c from '../images/c.png'
import ruby from '../images/ruby.png'
import css from '../images/css.png'
import html from '../images/html.png'
import php from '../images/php.png'
import react from '../images/react.gif'
import rubyonrails from '../images/rubyonrails.png'
import express from '../images/express.png'
import flask from '../images/flask.png'
import sql from '../images/sql.jpg'
import mongodb from '../images/mongodb.png'
import git from '../images/git.png'
import github from '../images/github.png'
import authenticate from '../images/authenticate.png'
import authorize from '../images/authorize.png'
import encrypt from '../images/encrypt.png'
import api from '../images/api.png'

const Skills = () => {
  const SkillDiv = ({title, children}) => {
    return(
      <div className='skill-div'>
      <h3 className='skill-title'>{title}</h3><br/>
      <div className='children-div'>{children}</div>
      
    </div>
    );
  };

  const SkillCard = ({skillname, skillimage, description}) => {
    return (
      <div className="skill-card">
        <h4>{skillname}</h4>
        <label>{description}</label><img className='skill-image' src={skillimage} alt={skillname} />
      </div>
    );
  };

  return (
    <div className="skills-container">
      <h2>Skills</h2>
      <div className="skills-list">        
        <SkillDiv title={"Programming"}>
          <SkillCard skillname={"javascript"} skillimage={javascript}/>
          <SkillCard skillname={"Python"} skillimage={python}/>
          <SkillCard skillname={"C/C++"} skillimage={c}/>
          <SkillCard skillname={"Ruby"} skillimage={ruby}/>
          <SkillCard skillname={"HTML"} skillimage={html}/>
          <SkillCard skillname={"CSS"} skillimage={css}/>
          <SkillCard skillname={"PHP"} skillimage={php}/>
        </SkillDiv>

        <SkillDiv title={"Web Frameworks"}>
          <SkillCard skillname={"ReactJs"} skillimage={react}/>
          <SkillCard skillname={"Ruby On Rails"} skillimage={rubyonrails}/>
          <SkillCard skillname={"ExpressJs"} skillimage={express}/>
          <SkillCard skillname={"Flask Py"} skillimage={flask}/>
        </SkillDiv>

        <SkillDiv title={"Databases"}>
          <SkillCard skillname={"Mongo Db"} skillimage={mongodb}/>
          <SkillCard skillname={"SQL/MySql"} skillimage={sql}/>
        </SkillDiv>

        <SkillDiv title={"Version Controll Systems"}>
          <SkillCard skillname={"Git"} skillimage={git}/>
          <SkillCard skillname={"GitHub"} skillimage={github}/>
        </SkillDiv>

        <SkillDiv title={"Web APIs"}>
          <SkillCard skillname={"Restfull APIs "} skillimage={api} description={"Experience working with RESTful APIs and other web service architectures, including the ability to consume and create APIs"}/>
        </SkillDiv>

        <SkillDiv title={"Security"}>
          <SkillCard skillname={"Authentication"} skillimage={authenticate}/>
          <SkillCard skillname={"Authorization"} skillimage={authorize}/>
          <SkillCard skillname={"Encryption"} skillimage={encrypt}/>
        </SkillDiv>
      </div>
    </div>
  );
};

export default Skills;
