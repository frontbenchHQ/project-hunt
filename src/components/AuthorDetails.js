import React from 'react';
import twitterIcon from '../assets/images/bx-twitter.svg';
import githubIcon from '../assets/images/bx-github.svg';
import linkedinIcon from '../assets/images/bx-linkedin.svg';

const AuthorDetails = () => {
    return (
        <div className="m-2 md:m-6">
            <h1 className="font-semibold text-2xl mb-4 text-center md:text-left">Meet the maker</h1>

            <div className="flex md:flex-row flex-col md:mx-0  md:w-auto w-60 mx-auto">
                <div className="flex">
                    <img src="https://www.flaticon.com/svg/static/icons/svg/847/847969.svg"
                        className="rounded-full w-16"
                        alt="author-img" />
                    <div className="flex flex-col m-2">
                        <h2 className="text-lg font-semibold">Rutik Wankhade</h2>
                        <p className="text-gray-400 text-sm">love building things</p>
                    </div>
                </div>

                <div className="flex ml-12">
                    <a href="https://twitter.com"><img src={twitterIcon} className="w-6 m-2" alt="icon" /></a>
                    <a href="https://github.com"><img src={githubIcon} className="w-6 m-2" alt="icon" /></a>
                    <a href="https://www.linkedin.com"><img src={linkedinIcon} className="w-6 m-2" alt="icon" /></a>
                </div>


            </div>
        </div>
    );
}

export default AuthorDetails;