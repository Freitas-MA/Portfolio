import React from 'react';
import { dataProjects } from './dataProjects';

const Projects = () => {
    return (
        <div className='project'>
            {dataProjects.map((item, index) => (
                <div className='flip-card' key={item.id}>
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <img src={item.image} alt="Avatar" style={{ width: '300px', height: '300px' }} />
                        </div>
                        <div className="flip-card-back">
                            <h1>{item.title}</h1>
                            <p>{item.description}</p>
                            <span>{item.url}</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Projects;
