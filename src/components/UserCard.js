import React from "react";
import { Link } from "react-router-dom";

const UserCard = ({ user }) => {
  return (
    <Link
      to={`/profile/${user[0].username}`}
      className="flex md:flex-col md:items-center lg:flex-row flex-row border-b-2 p-2  hover:bg-gray-100"
    >
      <img
        src={user[0].profileImg}
        alt="maker"
        className="rounded-full md:w-12 md:h-12 w-10 h-10 my-auto ml-2"
      />
      <h1 className="text-lg m-2 font-normal">{user[0].username}</h1>
    </Link>
  );
};

export default UserCard;
