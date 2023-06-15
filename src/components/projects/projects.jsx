import { dataProjects } from './dataProjects';

const Projects = () => {
    const projects = dataProjects(); // Call the dataProjects function to get the array of projects

    return (
        <div id="projects">
            <h1>Projects</h1>
            <p>Here are some of my projects. Click on the card to see the live version.</p>
            <div className='project'>
            {projects.map((item) => (
                <div className='flip-card' key={item.id}>
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <img src={item.image} alt="Avatar" style={{ width: '300px', height: '300px' }} />
                        </div>
                        <div className="flip-card-back">
                            <img src={item.image} alt="background" />
                            <div className="text-back">
                                <h1>{item.title}</h1>
                                <p>{item.description}</p>
                                <a href={item.url} target="_blank" rel="noopener noreferrer">Live View</a>
                            </div>
                        </div>
                    </div>
                </div>
                ))}
            </div>
        </div>
    )
}

export default Projects;
