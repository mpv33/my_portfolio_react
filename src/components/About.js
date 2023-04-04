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
        about: "I can build a beautiful and scalable SPA using HTML, CSS, Material UI, Tailwind css with React.js, Redux, NextJs"
    },
    {
        icon: repair,
        title: "Backend  Development",
        about: "i can handle database , server side , api development using Node.Js,Express.Js,Mongo DB",
    },
    {
        icon: api,
        title: "APP Development",
        about: "I can build a beautiful and scalable Andriod/Ios App using React Native, Redux"
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
                <div>
                    <h4>Full Stack Developer</h4>
                    <p>As an experienced Full Stack Developer with over 2.5 years of experience, I have a strong track record of delivering high-quality software solutions that meet client needs and exceed expectations. With expertise in both front-end and back-end development, I bring a well-rounded skillset to any project.</p>
                    <p>In my previous roles, I have developed a deep understanding of various programming languages and frameworks, including but not limited to HTML, CSS, JavaScript, React, Node.js, and MongoDB. I am comfortable working with  non-relational databases mongodb and have experience with  RESTful APIs.</p>
                    <p>In addition to my technical skills, I have honed my project management skills through experience with agile methodologies and project management tools like Jira, Trello, and Asana. I am a strong collaborator and team player, able to work effectively with other developers, designers, and stakeholders to deliver projects on time and within budget.</p>
                    <p>Overall, I am a persistent learner, passionate problem solver, and dedicated professional committed to delivering high-quality results. I am excited to continue my growth as a Full Stack Developer and to contribute my skills and expertise to the success of a dynamic team.</p>
                </div>
            </h6>
            <div className="container about__container">
                <h6 className="about__heading">Area of Interest</h6>
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