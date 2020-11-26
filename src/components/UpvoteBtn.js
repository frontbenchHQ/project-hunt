import React from 'react';

const UpvoteBtn = () => {
    return (
        <div className="border py-2 px-4 m-4 mr-2 ml-auto flex flex-col bg-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24"><path d="M3,19h18c0.372,0,0.713-0.207,0.886-0.536c0.173-0.329,0.148-0.727-0.063-1.033l-9-13c-0.373-0.539-1.271-0.539-1.645,0 l-9,13c-0.212,0.306-0.236,0.704-0.063,1.033C2.287,18.793,2.628,19,3,19z"></path></svg>
            <span className="text-md">12</span>
        </div>
    );
}

export default UpvoteBtn;