import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { addProject } from "redux/actions/projectAction";
import { useHistory } from "react-router-dom";
import { ADD_PROJECT_RESET } from "redux/actionTypes";
const AddNewProject = () => {
  const { register, errors, handleSubmit } = useForm();

  const dispatch = useDispatch();
  const history = useHistory();
  const addNewProject = useSelector((state) => state.addProject);
  const { loading, error, success, addedProjectInfo } = addNewProject;

  useEffect(() => {
    if (success) {
      const projectId = addedProjectInfo.project._id;
      dispatch({ type: ADD_PROJECT_RESET });
      history.push(`/projectdetails/${projectId}`);
    }
  }, [success, addedProjectInfo, dispatch, history]);

  const onSubmit = (input) => {
    const data = new FormData();
    data.append("projectName", input.projectName);
    data.append("description", input.description);
    data.append("githubLink", input.githubLink);
    data.append("liveLink", input.liveLink);
    data.append("tagline", input.tagline);
    data.append("technologies", input.technologies);
    for (const file of input.images) {
      data.append("images", file);
    }
    dispatch(addProject(data));
  };

  return (
    <div className="md:px-20 p-4 py-8 bg-white md:mx-72 md:mt-20 shadow rounded-md ">
      <h1 className="md:text-3xl text-2xl text-center mb-20  text-gray-800 font-semibold">
        Add new Project
      </h1>
      {error && <p className=" font-semibold text-red-500 ">{error}</p>}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col">
          <label className="text-lg ml-2">Project Name</label>
          <input
            type="text"
            className="bg-gray-100 p-2 m-2 focus:outline-none"
            placeholder="Myapp"
            name="projectName"
            ref={register({ required: true })}
          />
          {errors.projectName && (
            <p className="text-red-400">*Project name is required</p>
          )}
        </div>

        <div className="flex flex-col">
          <label className="text-lg ml-2">Tagline</label>
          <input
            type="text"
            name="tagline"
            placeholder="An app that does... "
            className="bg-gray-100 p-2 m-2 focus:outline-none"
            ref={register({ required: true })}
          />
          {errors.tagline && (
            <p className="text-red-400">*a short description is required</p>
          )}
        </div>

        <div className="flex flex-col">
          <label className="text-lg ml-2">
            Long Description
            <span className="text-xs pl-1">(min. 200 and max. 600 char)</span>
          </label>
          <textarea
            type="text"
            name="description"
            placeholder="Describe your app"
            className="bg-gray-100 h-40 p-2 m-2 focus:outline-none"
            ref={register({ maxLength: 600 })}
          />
          {errors.description && (
            <p className="text-red-400">*Reached max limit i.e.600 char</p>
          )}
        </div>

        <div className="flex flex-col">
          <label className="text-lg ml-2">Technologies Used</label>
          <input
            type="text"
            name="technologies"
            placeholder="For ex. React, tailwindcss"
            className="bg-gray-100 p-2 m-2 focus:outline-none"
            ref={register}
          />
        </div>

        <div className="flex flex-col">
          <label className="text-lg ml-2">Live Demo</label>
          <input
            type="url"
            placeholder="https://projecthunt.netlify.app"
            name="liveLink"
            className="bg-gray-100 p-2 m-2 focus:outline-none"
            ref={register({ required: true })}
          />
          {errors.liveLink && (
            <p className="text-red-400">*Demo link is required</p>
          )}
        </div>
        <div className="flex flex-col">
          <label className="text-lg ml-2">Github Link</label>
          <input
            type="url"
            placeholder="https://projecthunt.netlify.app"
            name="githubLink"
            className="bg-gray-100 p-2 m-2 focus:outline-none"
            ref={register({ required: true })}
          />
          {errors.githubLink && (
            <p className="text-red-400">*Github link is required</p>
          )}
        </div>

        <div className="flex flex-col">
          <label className="text-lg ml-2 flex items-center">
            Screenshot
            <span className="text-xs pl-1">(min. 1 and max. 3 images)</span>
          </label>
          <p className="text-xs pl-1 ml-2 text-red-400 font-bold">
            Combined size of all selected files should be less than 500KB
          </p>
          <input
            type="file"
            name="images"
            className="m-2"
            multiple
            ref={register}
          />
        </div>
        {loading ? (
          <button className="bg-blue-500 text-white mt-10 text-center flex mx-auto py-2 px-4 rounded text-lg">
            Uploading....
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

export default AddNewProject;
