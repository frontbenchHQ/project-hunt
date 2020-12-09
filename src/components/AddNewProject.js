import React from "react";

const AddNewProject = () => {
    return (
        <div className="md:px-20 p-10 bg-white md:mx-72 md:mt-20 shadow rounded-md ">
            <h1 className="md:text-3xl text-2xl text-center mb-20  text-gray-800 font-semibold">Add new Project</h1>
            <form>
                <div className="flex flex-col md:flex-row">
                    <div>
                        <label className="text-lg ml-2">Project Name</label>
                        <input type="text" className="bg-gray-100 p-2 m-2 focus:outline-none" />
                    </div>
                    <div>
                        <label className="text-lg ml-2">Favicon</label>
                        <input type="file" className="m-2" />
                    </div>
                </div>

                <div className="flex flex-col">
                    <label className="text-lg ml-2">Tagline</label>
                    <input type="text" className="bg-gray-100 p-2 m-2 focus:outline-none" />
                </div>

                <div className="flex flex-col">
                    <label className="text-lg ml-2">Long Description</label>
                    <textarea type="text" className="bg-gray-100 h-40 p-2 m-2 focus:outline-none" />
                </div>

                <div className="flex flex-col">
                    <label className="text-lg ml-2">Technologies Used</label>
                    <input type="text" className="bg-gray-100 p-2 m-2 focus:outline-none" />
                </div>

                <div className="flex flex-col">
                    <label className="text-lg ml-2">Live Demo</label>
                    <input type="text" className="bg-gray-100 p-2 m-2 focus:outline-none" />
                </div>

                <div className="flex flex-col">
                    <label className="text-lg ml-2">Screenshot</label>
                    <input type="file" className="m-2" />
                </div>
                <button className="bg-blue-500 text-white mt-10 text-center flex mx-auto py-2 px-4 rounded text-lg">
                    Submit
                    </button>
            </form>

        </div>
    );
}

export default AddNewProject;