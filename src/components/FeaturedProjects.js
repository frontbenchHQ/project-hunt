import React from 'react';
import ProjectCard from './ProjectCard';


const FeaturedProjects = () => {
    return (
        <div className="m-8 md:w-6/12">
            <h1 className="text-2xl md:text-left font-semibold mb-4">Featured Projects</h1>
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
        </div>
    );
}

export default FeaturedProjects;