import React from 'react';
import UpvoteBtn from './UpvoteBtn';
import AuthorDetails from './AuthorDetails';

const ProjectDetails = () => {
    return (
        <div className=" md:px-60 md:py-20 bg-white">

            <div className=" rounded-md p-4 text-left flex flex-row bg-white ">
                <img src='https://dummyimage.com/100x100/f2f2f2/484952&text=100x100' alt="favicon" className="rounded md:w-20 md:h-20 w-16 h-16 my-auto" />
                <div className="m-4 ">
                    <h2 className="md:text-3xl text-md font-semibold">Project Title</h2>
                    <p className=" text-sm">A short description of the project.</p>
                </div>
                <UpvoteBtn upvoteCount="62" />
            </div>

            <div className="md:flex flex-row">
                <img src='https://www.ultimatesource.toys/wp-content/uploads/2013/11/dummy-image-landscape-1.jpg' alt="favicon" className=" md:max-w-screen-xl max-w-auto p-2 h-80 rounded my-auto" />
                <div className="p-4">
                    <a
                        href="https://projecthunt.netlify.app"
                        className="border shadow rounded p-2 text-xl text-blue-500 m-2 hover:border-blue-500">Live demo</a>
                    <p className="mt-4">This is a long description about the project . hey everyone. I was learning react and I wanted to implement my knowledge , so I created this small project. It does this and that. It's built wih react and tailwindcss. Share your feedback please.</p>
                </div>
            </div>

            <AuthorDetails />

        </div>);
}

export default ProjectDetails;