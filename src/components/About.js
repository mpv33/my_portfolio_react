import React from 'react';
import api from '../assets/icons/api.svg'
import algo from '../assets/icons/algo.svg'
import computer from '../assets/icons/computer.svg'
import repair from '../assets/icons/repair.svg'
import Skillcard from './Skillcard';

const skills = [
    {
        icon: computer,
        title: "Frontend Development",
        about: "I can build a beautiful and scalable SPA using HTML, CSS and React.js"
    },
    {
        icon: repair,
        title: "Backend  Development",
        about: "handle database, server, api using  Node.Js,Express Js,Django, Mysql, SQLlite",
    },
    {
        icon: api,
        title: "API Development",
        about: "I can develop robust REST API and Serverless Api using Nodejs and AWS "
    },
    {
        icon: algo,
        title: "Competitive Coder",
        about: "a daily problem solver in HackerRank and Leetcode"
    },
  
]


const About = () => {
    return (
        <div className="about">
            <h6 className="about__intro">
                I describe myself as someone who's persistant, 
                a quick learner and loves problem solving by using simple and scalable solutions.
                I've been working as a Software Enginer in Tech Vedika Software Pvt.Ltd ,Hyderabad since Nov ,2020.
                I have also done one Internship as a Python Developer at NeuraltechSoft Software Pvt. 
                Ltd ,Mumbai From Jan 2020 to March 2020.
                
            </h6>
            <div className="container about__container">
                <h6 className="about__heading">What I offer</h6>
                <div className="row">
                    {
                        skills.map(skill =>
                            <Skillcard skill={skill} />

                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default About;