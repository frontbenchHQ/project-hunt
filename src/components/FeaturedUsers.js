import { useEffect } from "react";
import UserCard from "./UserCard";
import { useDispatch, useSelector } from "react-redux";
import { getTopMakers } from "redux/actions/userAction";
import { TOPMAKERS_USER_RESET } from "redux/actionTypes";
import Loader from "./Loader";
const FeaturedUsers = () => {
  const dispatch = useDispatch();
  const topMakerUser = useSelector((state) => state.topMakerUser);
  const { loading, error, topMakerUserInfo } = topMakerUser;
  useEffect(() => {
    if (!topMakerUserInfo) {
      dispatch(getTopMakers());
    }
  }, [topMakerUserInfo, dispatch]);
  useEffect(() => {
    return () => {
      dispatch({ type: TOPMAKERS_USER_RESET });
    };
  }, [dispatch]);
  return (
    <div className="flex flex-col m-8 md:w-4/12">
      <h1 className="text-2xl md:text-left font-semibold mb-4">Top Makers</h1>
      <div className="bg-white p-4 md:p-8 border rounded-md">
        {loading ? (
          <Loader message={"Top Users"} />
        ) : error ? (
          <p className=" font-semibold text-red-500 ">{error}</p>
        ) : topMakerUserInfo ? (
          topMakerUserInfo.map((user) => {
            return <UserCard key={user._id} user={user.user} />;
          })
        ) : null}
      </div>
    </div>
  );
};

export default FeaturedUsers;
