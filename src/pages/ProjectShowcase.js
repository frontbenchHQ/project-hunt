import React, { useEffect, useState } from "react";
import ProjectCard from "../components/ProjectCard";
import Dropdown from "../components/Dropdown";
import { useDispatch, useSelector } from "react-redux";
import { getAllProject } from "redux/actions/projectAction";
import Loader from "components/Loader";
import { ALL_PROJECT_RESET } from "redux/actionTypes";

const ProjectShowcase = () => {
  const options = ["Recently added", "Top Voted", "Featured"];

  const [selected, setSelected] = useState(options[0]);
  const dispatch = useDispatch();
  const allProjects = useSelector((state) => state.allProjects);
  const { loading, error, allProjectsInfo } = allProjects;
  useEffect(() => {
    if (!allProjectsInfo && selected === "Recently added") {
      dispatch(getAllProject());
    }
  }, [allProjectsInfo, selected, dispatch]);
  useEffect(() => {
    if (selected === "Top Voted") {
      dispatch(getAllProject("topvoted"));
    } else if (selected === "Featured") {
      dispatch(getAllProject("featured"));
    } else if (selected === "Recently added") {
      dispatch(getAllProject());
    }
  }, [selected, dispatch]);
  useEffect(() => {
    return () => {
      dispatch({ type: ALL_PROJECT_RESET });
    };
  }, [dispatch]);
  return (
    <div className="md:px-60 p-2 text-center min-window-height">
      <h2 className="text-3xl font-bold text-gray-600 font-sans m-8">
        Showcase
      </h2>

      <Dropdown
        options={options}
        selected={selected}
        onSelectedChange={setSelected}
      />
      {error && <p className=" font-semibold text-red-500 ">{error}</p>}
      <div className="flex flex-row flex-wrap justify-center">
        {loading ? (
          <Loader message="Curating Projects for you" />
        ) : allProjectsInfo ? (
          allProjectsInfo.map((project) => {
            return (
              <div className="m-2 md:w-2/5" key={project._id}>
                <ProjectCard project={project} />
              </div>
            );
          })
        ) : (
          <Loader message="Curating Projects for you" />
        )}
      </div>
    </div>
  );
};

export default ProjectShowcase;
