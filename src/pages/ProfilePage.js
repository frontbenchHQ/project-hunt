import { useEffect } from "react";
import AuthorDetails from "components/AuthorDetails";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUserProfile } from "redux/actions/userAction";
import { USER_PROFILE_RESET } from "redux/actionTypes";
import Loader from "components/Loader";
import ProjectCard from "components/ProjectCard";
// import Loader from "./Loader";
const ProfilePage = () => {
  const { username } = useParams();
  const dispatch = useDispatch();
  const userProfile = useSelector((state) => state.userProfile);
  const { loading, error, userProfileInfo } = userProfile;
  useEffect(() => {
    if (!userProfileInfo) {
      dispatch(getUserProfile(username));
    }
  }, [userProfileInfo, username, dispatch]);
  useEffect(() => {
    return () => {
      dispatch({ type: USER_PROFILE_RESET });
    };
  }, [dispatch]);
  return (
    <div className="md:px-40 p-2 min-window-height ">
      {loading ? (
        <Loader message={"Profile Loading"} />
      ) : error ? (
        <p className=" font-semibold text-red-500 ">{error}</p>
      ) : (
        userProfileInfo && (
          <>
            <div className="flex flex-row flex-wrap justify-between">
              <AuthorDetails
                user={{
                  name: userProfileInfo.name,
                  username: userProfileInfo.username,
                  profileImg: userProfileInfo.profileImg,
                  socialUrl: userProfileInfo.socialUrl,
                }}
              />
              <div className="md:flex flex-col  m-2">
                <div className="border-2 border-gray-200 flex flex-row p-2 rounded-lg bg-green-100 m-2 text-center justify-between">
                  <p className="text-xl text-gray-400">Projects submitted</p>
                  <h2 className="title-font font-medium text-lg pl-2 text-gray-600">
                    {userProfileInfo.totalProjects}
                  </h2>
                </div>

                <div className="border-2 border-gray-200 flex flex-row items-center p-2 rounded-lg bg-pink-100 m-2 justify-between">
                  <p className="text-xl text-gray-400">Total Upvotes</p>
                  <h2 className="title-font font-medium text-lg pl-2 text-gray-600">
                    {userProfileInfo.totalUpvotes}
                  </h2>
                </div>
              </div>
            </div>

            <div className="flex flex-row flex-wrap">
              {userProfileInfo.projects.map((project) => {
                return (
                  <div className="p-2 md:w-3/6" key={project._id}>
                    <ProjectCard project={project} />
                  </div>
                );
              })}
            </div>
          </>
        )
      )}
    </div>
  );
};

export default ProfilePage;
