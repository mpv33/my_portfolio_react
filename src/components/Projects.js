import React, { useState } from 'react';
import data_projects from './data/projects_data'
import ProjectCard from './ProjectCard';


const Projects = () => {
    const [projects, setProjects] = useState(data_projects)
    const [active, setActive] = useState('All')
    const handleFilterCategory = (name) => {
        const new_array = data_projects.filter(project => project.category.includes(name))
        setProjects(new_array)
        setActive(name)
    }
    return (
        <div className="container projects">
            <div className="projects__navbar">
                <div  className={active === 'All' && 'projects__navbar-active'}
                 onClick={ () => {
                     setProjects(data_projects)
                     setActive ('All')}
                }>All</div>
                <div className={active === 'python' && 'projects__navbar-active'} onClick={() => handleFilterCategory('python')}>Python</div>
                <div className={active === 'js' && 'projects__navbar-active'} onClick={() => handleFilterCategory('js')}>JavaScript</div>
                <div className={active === 'reactjs' && 'projects__navbar-active'} onClick={() => handleFilterCategory('reactjs')}>ReactJs</div>
                <div className={active === 'nodejs' && 'projects__navbar-active'} onClick={() => handleFilterCategory('nodejs')}>Nodejs</div>
            </div>
            <div className="row">

                {
                    projects.map(project =>
                        <ProjectCard project={project} />)
                }

            </div>
        </div>
    );
};

export default Projects;