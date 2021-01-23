import { useEffect } from "react";
import ProjectCard from "./ProjectCard";

import { useDispatch, useSelector } from "react-redux";
import { getFeaturedProject } from "redux/actions/projectAction";
import { FEATURED_PROJECT_RESET } from "redux/actionTypes";
import Loader from "./Loader";
const FeaturedProjects = () => {
  const dispatch = useDispatch();
  const featuredProjects = useSelector((state) => state.featuredProjects);
  const { loading, error, featuredProjectsInfo } = featuredProjects;
  useEffect(() => {
    if (!featuredProjectsInfo) {
      dispatch(getFeaturedProject());
    }
  }, [featuredProjectsInfo, dispatch]);
  useEffect(() => {
    return () => {
      dispatch({ type: FEATURED_PROJECT_RESET });
    };
  }, [dispatch]);
  return (
    <div className="m-8 md:w-8/12">
      <h1 className="text-2xl md:text-left font-semibold mb-4">
        Featured Projects
      </h1>
      {loading ? (
        <Loader message="Featured Project" />
      ) : error ? (
        <p className=" font-semibold text-red-500 ">{error}</p>
      ) : (
        featuredProjectsInfo &&
        featuredProjectsInfo.map((project) => {
          return <ProjectCard key={project._id} project={project} />;
        })
      )}
    </div>
  );
};

export default FeaturedProjects;
