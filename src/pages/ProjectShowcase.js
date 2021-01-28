import React, { useEffect, useState } from "react";
import Dropdown from "../components/Dropdown";
import { useDispatch, useSelector } from "react-redux";
import { getAllProject } from "redux/actions/projectAction";
import Loader from "components/Loader";
import { ALL_PROJECT_RESET } from "redux/actionTypes";
import ShowcaseCard from "components/ShowcaseCard";

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
    <div className="md:px-5 p-2 text-center min-window-height">
      <h2 className="text-3xl font-bold text-gray-600 font-sans m-8">
        Showcase
      </h2>
      {error && <p className=" font-semibold text-red-500 ">{error}</p>}
      <div className="md:flex md:flex-row ">
        <div className="md:w-1/4">
          <Dropdown
            options={options}
            selected={selected}
            onSelectedChange={setSelected}
          />
        </div>

        <div className="flex flex-row flex-wrap justify-center md:w-3/4">
          {loading ? (
            <Loader message="Curating Projects for you" />
          ) : allProjectsInfo ? (
            allProjectsInfo.map((project) => {
              return (
                <div className="m-2 w-full" key={project._id}>
                  <ShowcaseCard project={project} />
                </div>
              );
            })
          ) : (
            <Loader message="Curating Projects for you" />
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectShowcase;
