import React from "react";
import { Link } from "react-router-dom";
import subString from "utils/subString";
import UpvoteBtn from "./UpvoteBtn";
const ShowcaseCard = ({ project }) => {
  return (
    <Link to={`/projects/${project._id}`} className="w-full">
      <div className="border rounded-md p-4 text-left flex sm:flex-row flex-col bg-white hover:bg-purple-50 justify-between">
        <div className="flex sm:flex-row flex-col">
          <img
            src={project.imgUrl[0].url}
            alt="favicon"
            className="rounded shadow-md md:w-56 md:h-48 sm:w-16 sm:h-16 my-auto h-64"
          />
          <div>
            <div className="flex flex-row flex-wrap m-2 mb-4">
              {project.technologies.map((tech, index) =>
                index < 4 ? (
                  <div
                    className="p-2 rounded bg-green-100 sm:mx-2 sm:my-0 m-2"
                    key={index}
                  >
                    {subString(tech, 15)}
                  </div>
                ) : null
              )}
            </div>
            <div className="m-4 ">
              <h2 className="md:text-xl text-md font-medium">
                {subString(project.projectName, 30)}
              </h2>
              <p className=" text-sm">{subString(project.tagline, 30)}</p>
            </div>
            <div className="m-4">
              <p className=" text-md">{subString(project.description, 60)}</p>
            </div>

            <Link
              to={`/projects/${project._id}`}
              className=" sm:flex hidden rounded py-2 px-4 text-sm font-bold text-blue-600 ml-4 "
            >
              Read More...
            </Link>
          </div>
        </div>

        <div className="flex sm:flex-col flex-row-reverse items-center">
          <UpvoteBtn upvoteCount={project.totalUpvotes} />
          <Link
            to={`/projects/${project._id}`}
            className=" sm:hidden flex rounded py-2 px-4 text-sm font-bold text-blue-600 ml-4 "
          >
            Read More...
          </Link>
        </div>
      </div>
    </Link>
  );
};

export default ShowcaseCard;
