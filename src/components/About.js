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
                I am looking for more productive role that suit my skill and ability and grow in furture . actively looking as Full stack developer
                I describe myself as someone who's persistant,
                a quick learner and loves problem solving by using simple and scalable solutions.
                I've been working as a Software Enginer (2.5 + years) since Nov ,2020.
                I did my B.tech in computer science from UPTU Lucknow (2020).


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