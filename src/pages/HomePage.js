import React from 'react';
import collabImage from 'assets/images/collab-image.svg';
import { Link } from 'react-router-dom';
import FeaturedProjects from 'components/FeaturedProjects';
import FeaturedUsers from 'components/FeaturedUsers';

const HomePage = () => {
    return (
        <div className=" text-center">
            <div className="flex md:flex-row flex-col-reverse  ">
                <div className="text-gray-700 md:mt-36 md:ml-36 mt-6 m-4 md:text-left text-center">
                    <p className="text-lg">A community of makers</p>
                    <h1 className="md:text-4xl text-3xl font-bold ">Build projects and share with community</h1>
                    <Link to="/login"><button className="bg-purple-500 text-white px-4 py-2 rounded text-xl mt-4">Join Now</button></Link>
                </div>

                <img src={collabImage} alt="collab-illustration" className="md:m-4 md:max-w-screen-md" />
            </div>

            <div className="flex md:flex-row flex-col justify-center">
                <FeaturedProjects />
                <FeaturedUsers />
            </div>
        </div>
    );
}

export default HomePage;