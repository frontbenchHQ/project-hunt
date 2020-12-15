import React from "react";
import { useForm } from "react-hook-form";
import { createProject } from "utils/api";


const AddNewProject = () => {
    const { register, errors, handleSubmit } = useForm();

    const onSubmit = (data) => {
        let tech = data.language.split(',');

        let project = {
            "projectName": data.projectName,
            "description": data.description,
            "category": ["Frontend"],
            "language": tech,
            "userId": "1"
        }

        createProject(project);
    }

    return (
        <div className="md:px-20 p-4 py-8 bg-white md:mx-72 md:mt-20 shadow rounded-md ">
            <h1 className="md:text-3xl text-2xl text-center mb-20  text-gray-800 font-semibold">
                Add new Project
            </h1>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col md:flex-row">

                    <div className="flex flex-col">
                        <label className="text-lg ml-2">Project Name</label>
                        <input
                            type="text"
                            className="bg-gray-100 p-2 m-2 focus:outline-none"
                            placeholder="Myapp"
                            name="projectName"
                            ref={register({ required: true })}
                        />
                        {errors.projectName && <p className="text-red-400">*Project name is required</p>}
                    </div>

                    <div className="flex flex-col">
                        <label className="text-lg ml-2">Favicon</label>
                        <input
                            type="file"
                            className="m-2"
                            name="favicon"
                            ref={register}
                        />
                        {errors.favicon && <p className="text-red-400">*Project name is required</p>}
                    </div>
                </div>

                <div className="flex flex-col">
                    <label className="text-lg ml-2">Tagline</label>
                    <input
                        type="text"
                        name="description"
                        placeholder="An app that does... "
                        className="bg-gray-100 p-2 m-2 focus:outline-none"
                        ref={register({ required: true })}
                    />
                    {errors.description && <p className="text-red-400">*a short description is required</p>}
                </div>

                <div className="flex flex-col">
                    <label className="text-lg ml-2">Long Description</label>
                    <textarea
                        type="text"
                        name="longDescription"
                        placeholder="Describe your app"
                        className="bg-gray-100 h-40 p-2 m-2 focus:outline-none"
                        ref={register({ maxLength: 250 })}
                    />
                    {errors.longDescription && <p className="text-red-400">*Reached max limit i.e.250 char</p>}
                </div>

                <div className="flex flex-col">
                    <label className="text-lg ml-2">Technologies Used</label>
                    <input
                        type="text"
                        name="language"
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
                        name="demo"
                        className="bg-gray-100 p-2 m-2 focus:outline-none"
                        ref={register({ required: true })}
                    />
                    {errors.demo && <p className="text-red-400">*Demo link is required</p>}
                </div>

                <div className="flex flex-col">
                    <label className="text-lg ml-2">Screenshot</label>
                    <input
                        type="file"
                        name="screenshot"
                        className="m-2"
                        ref={register}
                    />
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 text-white mt-10 text-center flex mx-auto py-2 px-4 rounded text-lg">
                    Submit
                </button>
            </form>
        </div>
    );
}

export default AddNewProject;