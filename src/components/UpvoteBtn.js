import React from 'react';
import upvoteIcon from 'assets/images/upvoteIcon.svg';


const UpvoteBtn = ({ upvoteCount }) => {
    return (
        <div className="border py-2 px-4 m-4 mr-2 ml-auto flex flex-col bg-white">
            <img src={upvoteIcon} className="w-4 h-4" alt="upvoteIcon" />
            <span className="text-md">{upvoteCount}</span>
        </div>
    );
}

export default UpvoteBtn;