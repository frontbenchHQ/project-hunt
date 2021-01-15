import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";

const ProtectedRoutes = ({ component: Component, ...restProps }) => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  return userInfo ? (
    <Route
      {...restProps}
      render={(routeProps) => <Component {...routeProps} />}
    />
  ) : (
    <Redirect to="/login" />
  );
};

export default ProtectedRoutes;
