import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCurrentUserProfile } from "redux/actions/userAction";
import dropDownIcon from "../assets/images/chevron-down.svg";
import NavDropDown from "./NavDropDown";

const Navbar = () => {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const currentUserProfile = useSelector((state) => state.currentUserProfile);
  const { loading, currentUserProfileInfo } = currentUserProfile;
  const [toogle, setToogle] = useState(false);
  const changeToogle = () => {
    setToogle(!toogle);
  };
  useEffect(() => {
    if (userInfo) {
      if (!currentUserProfileInfo) {
        dispatch(getCurrentUserProfile());
      }
    }
  }, [userInfo, currentUserProfileInfo, dispatch]);
  return (
    <header className="bg-purple-600 text-white justify-center  shadow flex flex-row mx-auto flex-wrap md:p-0 p-2">
      <div className="md:m-16 md:mt-4 md:mb-4 2xl:m-auto 2xl:mt-4 2xl:mb-4 max-w-screen-2xl flex w-full">
        <Link to="/">
          <div className="flex">
            <span role="img" aria-label="magnifying-glass" className="m-1">
              🔍
            </span>
            <h2 className="font-semibold md:text-2xl text-lg ml-22">
              ProjectHunt
            </h2>
          </div>
        </Link>
        <div className="ml-auto md:text-lg text-sm font-medium flex flex-wrap items-center  justify-center">
          {userInfo && (
            <Link to="/addnewproject" className="sm:flex hidden">
              <span className="m-2">Add Project</span>
            </Link>
          )}

          <Link to="/showcase" className={userInfo ? "sm:flex hidden" : "flex"}>
            <span className="m-2">Showcase</span>
          </Link>

          {userInfo ? (
            <div>
              <div className="flex flex-row" onClick={changeToogle}>
                {loading ? null : (
                  <>
                    <img
                      src={
                        currentUserProfileInfo &&
                        currentUserProfileInfo.profileImg
                      }
                      alt="favicon"
                      className="rounded-full ml-1 w-9 h-9 my-auto"
                    />
                    <img
                      src={dropDownIcon}
                      className="w-6 ml-auto mr-2"
                      alt="down-arrow"
                    />
                  </>
                )}
              </div>
              {toogle && (
                <div className="absolute sm:right-14 right-6">
                  <NavDropDown changeToogle={changeToogle} />
                </div>
              )}
            </div>
          ) : (
            <Link to="/login">
              <span className="m-2 border-2 p-1 rounded hover:bg-purple-500">
                Login
              </span>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
