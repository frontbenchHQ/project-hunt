import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {
  getCurrentUserProfile,
  updateCurrentUserProfile,
} from "redux/actions/userAction";
// import { addProject } from "redux/actions/projectAction";
// import { useHistory } from "react-router-dom";
// import { ADD_PROJECT_RESET } from "redux/actionTypes";
const ProfileUpdatePage = () => {
  const currentUserProfile = useSelector((state) => state.currentUserProfile);
  const { loading, currentUserProfileInfo } = currentUserProfile;
  let defaultvalue = {
    defaultvalues: {},
  };
  if (currentUserProfileInfo) {
    defaultvalue = {
      defaultValues: {
        name: currentUserProfileInfo.name,
        username: currentUserProfileInfo.username,
        linkedin: currentUserProfileInfo.socialUrl.linkedin,
        github: currentUserProfileInfo.socialUrl.github,
      },
    };
  }
  const { register, errors, handleSubmit, setValue } = useForm();
  const dispatch = useDispatch();
  const updateUserProfile = useSelector((state) => state.updateUserProfile);
  const { loading: updateLoading, success } = updateUserProfile;

  useEffect(() => {
    if (!currentUserProfileInfo) {
      dispatch(getCurrentUserProfile());
    } else if (success) {
      dispatch(getCurrentUserProfile());
    } else {
      setValue("name", currentUserProfileInfo.name);
      setValue("username", currentUserProfileInfo.username);
      setValue("linkedin", currentUserProfileInfo.linkedin);
      setValue("github", currentUserProfileInfo.github);
      setValue("twitter", currentUserProfileInfo.twitter);
      setValue("stackoverflow", currentUserProfileInfo.stackoverflow);
      setValue("personal", currentUserProfileInfo.personal);
    }
  }, [success, currentUserProfileInfo, setValue, dispatch]);

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
      data.append("profileImg", input.profileImg);
    }
    dispatch(updateCurrentUserProfile(data));
  };

  return (
    <div className="md:px-20 p-4 py-8 bg-white md:mx-72 md:mt-20 shadow rounded-md ">
      <h1 className="md:text-3xl text-2xl text-center mb-20  text-gray-800 font-semibold">
        Profile Update
      </h1>
      {/* {error && <p className=" font-semibold text-red-500 ">{error}</p>} */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col">
          <label className="text-lg ml-2">Profile Image</label>
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
