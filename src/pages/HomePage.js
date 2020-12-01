import React from "react";
import collabImage from "assets/images/collab-image.svg";
import { Link } from "react-router-dom";
import FeaturedProjects from "components/FeaturedProjects";
import FeaturedUsers from "components/FeaturedUsers";

const HomePage = () => {
  return (
    <div className=" text-center md:m-16 2xl:m-auto max-w-screen-2xl">
      <div className="flex md:flex-row flex-col-reverse md:mt-8 md:mb-8  ">
        <div className="flex flex-col justify-center text-gray-700 md:w-5/12   m-8 md:text-left text-center">
          <p className="text-lg">A community of makers</p>
          <h1 className="md:text-4xl text-3xl font-bold ">
            Build projects and share with community
          </h1>
          <Link to="/login">
            <button className="bg-purple-500 text-white px-4 py-2 rounded text-xl mt-4">
              Join Now
            </button>
          </Link>
        </div>
        <div className="flex justify-center items-center md:w-7/12">
          <img src={collabImage} alt="collab-illustration" className=" " />
        </div>
      </div>

      <div className="flex md:flex-row flex-col justify-center">
        <FeaturedProjects />
        <FeaturedUsers />
      </div>
    </div>
  );
};

export default HomePage;
