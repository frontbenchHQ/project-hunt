import { useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import upvoteIcon from "assets/images/upvoteIcon.svg";

import AuthorDetails from "./AuthorDetails";
import { useDispatch, useSelector } from "react-redux";
import { getSingleProject } from "redux/actions/projectAction";
import { SINGLE_PROJECT_RESET } from "redux/actionTypes";
import Loader from "./Loader";
import { upvoteProject } from "utils/api";

const ProjectDetails = () => {
  const { projectId } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const singleProject = useSelector((state) => state.singleProject);
  const { loading, error, singleProjectInfo } = singleProject;
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (!singleProjectInfo) {
      dispatch(getSingleProject(projectId));
    }
  }, [projectId, singleProjectInfo, dispatch]);

  useEffect(() => {
    return () => {
      dispatch({ type: SINGLE_PROJECT_RESET });
    };
  }, [dispatch]);

  const handleUpvote = async (proID) => {
    if (userInfo) {
      const { success } = await upvoteProject(proID, userInfo.token);
      if (success) {
        dispatch({ type: SINGLE_PROJECT_RESET });
      }
    } else {
      history.push("/login");
    }
  };
  return (
    <div className=" md:px-40 md:py-20 bg-white md:mx-16 2xl:m-auto max-w-screen-2xl">
      {singleProjectInfo || error ? (
        loading ? (
          <Loader message="Opportunities don't happen. You create them" />
        ) : error ? (
          <p className=" font-semibold text-red-500 ">{error}</p>
        ) : (
          <>
            <div className=" p-4 text-left flex  flex-col md:flex-row bg-white justify-center items-center mx-auto">
              <div className="flex flex-row">
                <img
                  src={singleProjectInfo.imgUrl[0].url}
                  alt="favicon"
                  className="rounded md:w-20 md:h-20 w-16 h-16 my-auto"
                />
                <div className="m-4 ">
                  <h2 className="md:text-3xl text-md font-semibold">
                    {singleProjectInfo.projectName}
                  </h2>
                  <p className=" text-sm">{singleProjectInfo.tagline}</p>
                </div>
              </div>

              <button
                onClick={() => handleUpvote(singleProjectInfo._id)}
                className=" mx-auto h-12 w-56 md:mr-2 md:ml-auto my-2 rounded flex flex-row bg-red-400 hover:bg-red-500 py-2 px-8 font-semibold text-white"
              >
                <img
                  src={upvoteIcon}
                  className="w-4 h-4 m-2"
                  alt="upvoteIcon"
                />
                <span className="text-lg">
                  Upvote {singleProjectInfo.totalUpvotes}
                </span>
              </button>
            </div>

            <div className="md:flex flex-row items-start">
              <img
                src={singleProjectInfo.imgUrl[0].url}
                alt="favicon"
                className=" md:max-w-screen-xl max-w-auto p-2 h-80 rounded my-auto"
              />
              <div className="p-4 flex flex-col">
                <p className="m-4 mt-0">{singleProjectInfo.description}</p>
                <div className="flex flex-row flex-wrap m-2 mb-4">
                  {singleProjectInfo.technologies.map((tech, index) => {
                    return (
                      <div className="p-2 rounded bg-green-100 m-2" key={index}>
                        {tech}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="md:flex flex-row items-start">
              <a
                href={singleProjectInfo.liveLink}
                target="_blank"
                rel="noreferrer"
                className=" rounded py-2 px-4 text-xl bg-blue-500 text-white m-4 hover:bg-blue-600"
              >
                Live demo
              </a>
              <a
                href={singleProjectInfo.githubLink}
                target="_blank"
                rel="noreferrer"
                className=" rounded py-2 px-4 text-xl bg-blue-500 text-white m-4 hover:bg-blue-600"
              >
                Github Link
              </a>
            </div>
            <div className="flex md:flex-row flex-col">
              <AuthorDetails user={singleProjectInfo.user} />
            </div>
          </>
        )
      ) : (
        <Loader message="Opportunities don't happen. You create them" />
      )}
    </div>
  );
};

export default ProjectDetails;
