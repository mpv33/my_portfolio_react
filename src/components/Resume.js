import React from 'react';
import react from '../assets/icons/react.svg'
import python from '../assets/icons/python.svg'
import javascript from '../assets/icons/java-script.svg'
import Bar from './Bar';

const languages = [
    {
        icon: python,
        name: 'Python',
        level: '75'
    },
    {
        icon: react,
        name: 'CPP',
        level: '45'
    },
    {
        icon: javascript,
        name: 'Java Script',
        level: '80'
    },
    
    {
        icon: react,
        name: 'Mysql/MongoDB',
        level: '50'
    }
]

const tools = [
    {
        icon: react,
        name: 'React Js',
        level: '75'
    },
    {
        icon: react,
        name: 'Django',
        level: '60'
    },
    {
        icon: react,
        name: 'Material UI',
        level: '50'
    },
    {
        icon: react,
        name: 'NodeJs',
        level: '50'
    },
    {
        icon: react,
        name: 'GIT',
        level: '55'
    },
    {
        icon: react,
        name: 'VS Code',
        level: '65'
    },
    

]


const Resume = () => {
    return (
        <div className="container resume">
            <div className="row">
                <div className="col-lg-6 resume-card" >
                    <h4 className="resume-card__heading">
                        Education
                    </h4>
                    <div className="resume-card__body">
                        <h5 className="resume-card__title">
                          SRIMT Lucknow (CSE)
                        </h5>
                        <h6 className="resume-card__name">
                            B.Tech (2016-2020)
                        </h6>
                        <p className="resume-card__details">I have completed my B.tech in CSE  From SRIMT Lucknow with 80%</p>
                    </div>
                    <div className="resume-card__body">
                        <h5 className="resume-card__title">
                          CMS Balrampur (pcm)
                        </h5>
                        <h6 className="resume-card__name">
                            XII (2014-2016)
                        </h6>
                        <p className="resume-card__details">I have done  XII in math  From CMS balrampur with 85% </p>
                    </div>
                </div>
                <div className="col-lg-6 resume-card" >
                    <h4 className="resume-card__heading">
                        Experience
                    </h4>
                    <div className="resume-card__body">
                        <h5 className="resume-card__title">
                            Software Enginner 
                        </h5>
                        <h6 className="resume-card__name">
                            Tech Vedika,Hyderabad ( nov 2020 - present)
                        </h6>
                        <p className="resume-card__details">Iam working on Open source based project using MERN Stack technology .</p>
                    </div>
                    <div className="resume-card__body">
                        <h5 className="resume-card__title">
                            Python developer Intern
                        </h5>
                        <h6 className="resume-card__name">
                            NeuralTechSoft,Mumbai( jan 2020 - march 2020)
                        </h6>
                        <p className="resume-card__details">I worked on Algo Trading based Project using python,numpy,pandas,trading indicator tools   .</p>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-6 resume-languages">
                    <h5 className="reume-language__heading">
                       Programming languages
                    </h5>
                    <div className="resume-language__body mt-3">
                        {
                            languages.map(language =>
                                <Bar value={language} />
                            )
                        }
                    </div>
                </div>
                <div className="col-lg-6 resume-languages">
                    <h5 className="reume-language__heading">
                        Framework and Tools
                    </h5>
                    <div className="resume-language__body mt-3">
                        {
                            tools.map(tool => <Bar value={tool} />)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Resume;