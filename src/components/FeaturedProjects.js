import React from "react";
import ProjectCard from "./ProjectCard";
import allProjects from "data/projectsData";

const FeaturedProjects = () => {
  return (
    <div className="m-8 md:w-8/12">
      <h1 className="text-2xl md:text-left font-semibold mb-4">
        Featured Projects
      </h1>
      {allProjects.map((project) => {
        return <ProjectCard project={project} />;
      })}
    </div>
  );
};

export default FeaturedProjects;
