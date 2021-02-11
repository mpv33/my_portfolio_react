import React from 'react';
import react from '../assets/icons/react.svg'
import python from '../assets/icons/python.svg'
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
        icon: react,
        name: 'Java Script',
        level: '80'
    },
    {
        icon: react,
        name: 'React',
        level: '75'
    },
    {
        icon: react,
        name: 'Django',
        level: '60'
    },
    {
        icon: react,
        name: 'MUI',
        level: '50'
    },
    {
        icon: react,
        name: 'Node',
        level: '50'
    },
    {
        icon: react,
        name: 'Mysql',
        level: '50'
    }
]

const tools = [
    {
        icon: react,
        name: 'GIT',
        level: '85'
    },
    {
        icon: react,
        name: 'VS Code',
        level: '45'
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
                        <p className="resume-card__name">
                            B.Tech (2016-2020)
                        </p>
                        <p className="resume-card__details">I have done  B.tech in CSE  From SRIMT Lucknow</p>
                    </div>
                </div>
                <div className="col-lg-6 resume-card" >
                    <h4 className="resume-card__heading">
                        Experience
                    </h4>
                    <div className="resume-card__body">
                        <h5 className="resume-card__title">
                            Software Enginner Trainee
                        </h5>
                        <p className="resume-card__name">
                            Tech Vedika Software Pvt.Ltd  ( nov 2020 - present)
                        </p>
                        <p className="resume-card__details">I  have worked on many live project based on MERN Stack technology using React and Node js  .</p>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-6 resume-languages">
                    <h5 className="reume-language__heading">
                        Language and Framework
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
                        Tools and Softwares
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