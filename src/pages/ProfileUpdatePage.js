import Axios from "axios";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {
  getCurrentUserProfile,
  updateCurrentUserProfile,
} from "redux/actions/userAction";
import { UPDATE_USER_PROFILE_RESET } from "redux/actionTypes";
// import { addProject } from "redux/actions/projectAction";
// import { useHistory } from "react-router-dom";
// import { ADD_PROJECT_RESET } from "redux/actionTypes";
const ProfileUpdatePage = () => {
  const currentUserProfile = useSelector((state) => state.currentUserProfile);
  const { currentUserProfileInfo } = currentUserProfile;
  const { register, errors, handleSubmit, setValue } = useForm();
  const dispatch = useDispatch();
  const updateUserProfile = useSelector((state) => state.updateUserProfile);
  const {
    loading: updateLoading,
    success,
    error: updateError,
  } = updateUserProfile;

  useEffect(() => {
    if (!currentUserProfileInfo) {
      dispatch(getCurrentUserProfile());
    } else if (success) {
      dispatch(getCurrentUserProfile());
      dispatch({ type: UPDATE_USER_PROFILE_RESET });
    } else {
      setValue("name", currentUserProfileInfo.name);
      setValue("username", currentUserProfileInfo.username);
      setValue("linkedin", currentUserProfileInfo.socialUrl.linkedin);
      setValue("github", currentUserProfileInfo.socialUrl.github);
      setValue("twitter", currentUserProfileInfo.socialUrl.twitter);
      setValue("stackoverflow", currentUserProfileInfo.socialUrl.stackoverflow);
      setValue("personal", currentUserProfileInfo.socialUrl.personal);
    }
  }, [currentUserProfileInfo, success, setValue, dispatch]);

  const onSubmit = (input) => {
    const data = new FormData();
    data.append("name", input.name);
    data.append("username", input.username);
    data.append("github", input.github);
    data.append("linkedin", input.linkedin);
    data.append("twitter", input.twitter);
    data.append("stackoverflow", input.stackoverflow);
    data.append("personal", input.personal);

    if (input.profileImg.length) {
      for (const file of input.profileImg) {
        data.append("profileImg", file);
      }
    }
    Axios.post("https://httpbin.org/anything", data).then((res) =>
      console.log(res)
    );
    console.log([...data.values()]);
    dispatch(updateCurrentUserProfile(data));
  };

  return (
    <div className="md:px-20 p-4 py-8 bg-white md:mx-72 md:mt-20 shadow rounded-md ">
      <h1 className="md:text-3xl text-2xl text-center mb-10  text-gray-800 font-semibold">
        Profile Update
      </h1>
      {updateError && (
        <p className=" font-semibold text-red-500 ">{updateError}</p>
      )}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col">
          <label className="text-lg ml-2">Profile Image (max. 500KB)</label>
          <input type="file" name="profileImg" className="m-2" ref={register} />
        </div>
        <div className="flex flex-col">
          <label className="text-lg ml-2">Name</label>
          <input
            type="text"
            className="bg-gray-100 p-2 m-2 focus:outline-none"
            placeholder="Name"
            name="name"
            ref={register({ required: true })}
          />
          {errors.name && <p className="text-red-400">*Name is required</p>}
        </div>
        <div className="flex flex-col">
          <label className="text-lg ml-2">Username</label>
          <input
            type="text"
            className="bg-gray-100 p-2 m-2 focus:outline-none"
            placeholder="Username"
            name="username"
            ref={register({ required: true })}
          />
          {errors.username && (
            <p className="text-red-400">*Username is required</p>
          )}
        </div>
        <div className="flex flex-col">
          <label className="text-lg ml-2">Linkedin</label>
          <input
            type="url"
            placeholder="https://www.linkedin.com/in/lakshay-saini-dev/"
            name="linkedin"
            className="bg-gray-100 p-2 m-2 focus:outline-none"
            ref={register({ required: true })}
          />
          {errors.linkedin && (
            <p className="text-red-400">*Linkedin link is required</p>
          )}
        </div>
        <div className="flex flex-col">
          <label className="text-lg ml-2">Github</label>
          <input
            type="url"
            placeholder="https://github.com/lakshay-saini-au8"
            name="github"
            className="bg-gray-100 p-2 m-2 focus:outline-none"
            ref={register({ required: true })}
          />
          {errors.github && (
            <p className="text-red-400">*Github link is required</p>
          )}
        </div>
        <div className="flex flex-col">
          <label className="text-lg ml-2">Twitter</label>
          <input
            type="url"
            placeholder="https://twitter.com/lakshay2018"
            name="twitter"
            className="bg-gray-100 p-2 m-2 focus:outline-none"
            ref={register()}
          />
          {errors.twitter && (
            <p className="text-red-400">*Twitter link is required</p>
          )}
        </div>
        <div className="flex flex-col">
          <label className="text-lg ml-2">Personal</label>
          <input
            type="url"
            placeholder="https://projecthunt.netlify.app"
            name="personal"
            className="bg-gray-100 p-2 m-2 focus:outline-none"
            ref={register()}
          />
          {errors.personal && (
            <p className="text-red-400">*Personal link is required</p>
          )}
        </div>

        <div className="flex flex-col">
          <label className="text-lg ml-2">Stackoverflow</label>
          <input
            type="url"
            placeholder="https://projecthunt.netlify.app"
            name="stackoverflow"
            className="bg-gray-100 p-2 m-2 focus:outline-none"
            ref={register()}
          />
          {errors.stackoverflow && (
            <p className="text-red-400">*Stackoverflow link is required</p>
          )}
        </div>

        {updateLoading ? (
          <button className="bg-blue-500 text-white mt-10 text-center flex mx-auto py-2 px-4 rounded text-lg">
            Updating....
          </button>
        ) : (
          <button
            type="submit"
            className="bg-blue-500 text-white mt-10 text-center flex mx-auto py-2 px-4 rounded text-lg"
          >
            Submit
          </button>
        )}
      </form>
    </div>
  );
};

export default ProfileUpdatePage;
