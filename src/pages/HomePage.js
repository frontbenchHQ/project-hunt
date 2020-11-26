import React from 'react';
import FeaturedProjects from '../components/FeaturedProjects';
import collabImage from '../assets/images/collab-image.svg'
const HomePage = () => {
    return (
        <div className=" text-center">
            <div className="flex md:flex-row flex-col-reverse ">
                <div className="text-gray-700 md:mt-36 md:ml-28 mt-6 m-5 md:text-left text-center">
                    <p className="text-lg">A community of makers</p>
                    <h1 className="md:text-4xl text-3xl font-bold ">Build projects and share with community</h1>
                    <button className="bg-purple-500 text-white px-4 py-2 rounded text-xl mt-4">Join Now</button>
                </div>

                <img src={collabImage} className="md:m-4 md:max-w-screen-md" />
            </div>
            <div className="max-w-screen-md ">
                <FeaturedProjects />
            </div>
        </div>
    );
}

export default HomePage;