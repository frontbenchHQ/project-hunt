import React from 'react';
import UpvoteBtn from './UpvoteBtn';
const ProjectCard = () => {
    return (
        <div className="border rounded-md p-4 text-left flex flex-row bg-white hover:bg-purple-50">
            <img src="https://via.placeholder.com/100" alt="favicon" className="rounded md:w-20 md:h-20 w-16 h-16 my-auto" />
            <div className="m-4 ">
                <h2 className="md:text-xl text-md font-medium">Project Name</h2>
                <p className=" text-sm">A short description of the project.</p>
            </div>
            <UpvoteBtn />
        </div>
    );
}

export default ProjectCard;