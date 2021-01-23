import React from "react";
import twitterIcon from "../assets/images/bx-twitter.svg";
import githubIcon from "../assets/images/bx-github.svg";
import linkedinIcon from "../assets/images/bx-linkedin.svg";
import { Link } from "react-router-dom";

const AuthorDetails = ({ user }) => {
  return (
    <div className="m-2 md:m-6">
      <h1 className="font-semibold text-2xl mb-4 text-center md:text-left">
        Meet the maker
      </h1>

      <div className="flex md:flex-row flex-col md:mx-0  md:w-auto w-60 mx-auto">
        <div className="flex">
          <img
            src={user.profileImg}
            className="rounded-full w-16"
            alt="author-img"
          />
          <div className="flex flex-col m-2">
            <Link
              to={`/profile/${user.username}`}
              className="text-lg font-semibold underline"
            >
              {user.username}
            </Link>
            <p className="text-gray-400 text-sm">{user.name}</p>
          </div>
        </div>

        <div className="flex ml-12">
          <a href={user.socialUrl.twitter}>
            <img src={twitterIcon} className="w-6 m-2" alt="icon" />
          </a>
          <a href={user.socialUrl.github}>
            <img src={githubIcon} className="w-6 m-2" alt="icon" />
          </a>
          <a href={user.socialUrl.linkedin}>
            <img src={linkedinIcon} className="w-6 m-2" alt="icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default AuthorDetails;
