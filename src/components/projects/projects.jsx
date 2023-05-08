import React from 'react';
import { dataProjects } from './dataProjects';

const Projects = ({ dataProjects }) => {

    return (
        <div className='project'>
            {dataProjects.map((id, title, description, image, url) => (
                <div className='flip-card' key={index}>
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <img src={image} alt="Avatar" style={{ width: '300px', height: '300px' }} />
                        </div>
                        <div className="flip-card-back">
                            <h1>{title}</h1>
                            <p>{description}</p>
                            <span>{url}</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Projects
