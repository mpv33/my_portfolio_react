import React from 'react';
import github from '../assets/icons/github.svg'
const ProjectCard = ({ project: { name, deployed_url, github_url } }) => {
    const image= 'data:image/png;base64,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'
    return (
        <div className="projectrCard col-md-6 col-lg-4 my-2">
            <figure className="projectCard__wrapper">
                <a href={deployed_url} target="_blank">
                    <img src={image} alt={name} className="projectCard__image" />
                </a>
                <div className="projectCard__title">
                    <a href={github_url} target="_blank">
                        <img src={github} alt="github link" className="projectCard__icon" />
                    </a>
                    {name}
                </div>
               
            </figure>

        </div>
    );
};

export default ProjectCard;