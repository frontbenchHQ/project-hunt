import React from "react";
import { Link } from "react-router-dom";
import subString from "utils/subString";
import UpvoteBtn from "./UpvoteBtn";
const ProjectCard = ({ project }) => {
  return (
    <Link to={`/projects/${project._id}`} className="w-full">
      <div className="border rounded-md p-4 text-left flex flex-row bg-white hover:bg-purple-50">
        <img
          src={project.imgUrl[0].url}
          alt="favicon"
          className="rounded md:w-20 md:h-20 w-16 h-16 my-auto"
        />
        <div className="m-4 ">
          <h2 className="md:text-xl text-md font-medium">
            {subString(project.projectName, 25)}
          </h2>
          <p className=" text-sm">{subString(project.tagline, 25)}</p>
        </div>
        <UpvoteBtn upvoteCount={project.totalUpvotes} />
      </div>
    </Link>
  );
};

export default ProjectCard;
