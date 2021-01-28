import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { logout } from "redux/actions/userAction";
const NavDropDown = ({ changeToogle }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const currentUserProfile = useSelector((state) => state.currentUserProfile);
  const { currentUserProfileInfo } = currentUserProfile;

  return (
    <div className={` text-center bg-white rounded shadow-md  m-2 mx-auto`}>
      <Link
        to={`/profile/${currentUserProfileInfo.username}`}
        className=" w-36  border-b text-purple-900 pl-2  border-gray-400 flex  hover:bg-purple-300 cursor-pointer"
        onClick={() => {
          changeToogle();
        }}
      >
        <h1 className="p-1">Dashboard</h1>
      </Link>
      <Link
        to={`/addnewproject`}
        className="sm:hidden w-36  border-b text-purple-900 pl-2  border-gray-400 flex  hover:bg-purple-300 cursor-pointer"
        onClick={() => {
          changeToogle();
        }}
      >
        <h1 className="p-1">Add Project</h1>
      </Link>
      <Link
        to={`/showcase`}
        className=" w-36  sm:hidden border-b text-purple-900 pl-2  border-gray-400 flex  hover:bg-purple-300 cursor-pointer"
        onClick={() => {
          changeToogle();
        }}
      >
        <h1 className="p-1">Showcase</h1>
      </Link>

      <Link
        to="/profile-setting"
        className=" w-36 border-b text-purple-900 pl-2 border-gray-400 flex  hover:bg-purple-300 cursor-pointer "
        onClick={() => {
          changeToogle();
        }}
      >
        <h1 className="p-1">Profile Setting</h1>
      </Link>
      <div
        className=" w-36  text-purple-900 cursor-pointer flex pl-2  hover:bg-purple-300  "
        onClick={() => {
          dispatch(logout());
          changeToogle();
          history.push("/");
        }}
      >
        <h1 className="p-1">Logout</h1>
      </div>
    </div>
  );
};

export default NavDropDown;
