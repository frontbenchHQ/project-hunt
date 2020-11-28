import React from 'react';

const UserCard = ({ user }) => {
    return (
        <div className="flex flex-row border-b-2 p-2  hover:bg-gray-100">
            <img src={user.avatar} alt="maker" className="rounded-full md:w-12 md:h-12 w-10 h-10 my-auto ml-2" />
            <h1 className="text-lg m-2 font-normal">{user.fullName}</h1>
        </div>
    );
}

export default UserCard;