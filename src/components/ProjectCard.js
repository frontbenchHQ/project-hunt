import React from 'react';
import UpvoteBtn from './UpvoteBtn';
const ProjectCard = ({ project }) => {
    return (
        <div className="border rounded-md p-4 text-left flex flex-row bg-white hover:bg-purple-50">
            <img src={project.favicon} alt="favicon" className="rounded md:w-20 md:h-20 w-16 h-16 my-auto" />
            <div className="m-4 ">
                <h2 className="md:text-xl text-md font-medium">{project.projectName}</h2>
                <p className=" text-sm">{project.description}</p>
            </div>
            <UpvoteBtn upvoteCount={project.upvotes} />
        </div>
    );
}

export default ProjectCard;