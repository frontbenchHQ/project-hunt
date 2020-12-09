import React from 'react';
import upvoteIcon from 'assets/images/upvoteIcon.svg';

import AuthorDetails from './AuthorDetails';

const techStack = ['React', 'Tailwindcss', 'Nodejs'];

const ProjectDetails = () => {
    return (
        <div className=" md:px-40 md:py-20 bg-white md:mx-16 2xl:m-auto max-w-screen-2xl">

            <div className=" p-4 text-left flex  flex-col md:flex-row bg-white justify-center items-center mx-auto">
                <div className="flex flex-row">
                    <img src='https://dummyimage.com/100x100/f2f2f2/484952&text=100x100' alt="favicon" className="rounded md:w-20 md:h-20 w-16 h-16 my-auto" />
                    <div className="m-4 ">
                        <h2 className="md:text-3xl text-md font-semibold">Project Title</h2>
                        <p className=" text-sm">A short description of the project.</p>
                    </div>
                </div>

                <div className=" mx-auto h-12 w-56 md:mr-2 md:ml-auto my-2 rounded flex flex-row bg-red-400 hover:bg-red-500 py-2 px-8 font-semibold text-white">
                    <img src={upvoteIcon} className="w-4 h-4 m-2" alt="upvoteIcon" />
                    <span className="text-lg">Upvote 100</span>
                </div>

            </div>

            <div className="md:flex flex-row">
                <img src='https://www.ultimatesource.toys/wp-content/uploads/2013/11/dummy-image-landscape-1.jpg' alt="favicon" className=" md:max-w-screen-xl max-w-auto p-2 h-80 rounded my-auto" />
                <div className="p-4">
                    <p className="m-4">This is a long description about the project . hey everyone. I was learning react and I wanted to implement my knowledge , so I created this small project. It does this and that. It's built wih react and tailwindcss. Share your feedback please.</p>
                    <div className="flex flex-row flex-wrap m-2 mb-4">
                        {techStack.map(tech => {
                            return (
                                <div className="p-2 rounded bg-green-100 m-2">{tech}</div>
                            )
                        })}
                    </div>

                    <a
                        href="https://projecthunt.netlify.app"
                        className=" rounded py-2 px-4 text-xl bg-blue-500 text-white m-4 hover:bg-blue-600">
                        Live demo
                    </a>

                </div>
            </div>
            <div className="flex md:flex-row flex-col">
                <AuthorDetails />
                <button className="text-lg rounded border-blue-400 hover:bg-blue-100 border-2 py-2 px-4 h-12 md:ml-auto md:mr-4 md:mt-12 m-4">Tweet</button>
            </div>

        </div>);
}

export default ProjectDetails;