import React from 'react';
import ProjectCard from './ProjectCard';


const FeaturedProjects = () => {
    return (
        <div className="m-8 md:ml-20">
            <h1 className="text-2xl text-left font-semibold mb-4">Featured Projects</h1>
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />

        </div>
    );
}

export default FeaturedProjects;