import { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { register } from "redux/actions/userAction";
import { USER_REGISTER_RESET } from "redux/actionTypes";

const Signup = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const userRegister = useSelector((state) => state.userRegister);
  const { loading, error, success } = userRegister;

  useEffect(() => {
    if (success) {
      dispatch({ type: USER_REGISTER_RESET });
      history.push("/login");
    }
  });

  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleInputChange = (e) => {
    if (e.target.name === "email") {
      setEmail(e.target.value);
    }
    if (e.target.name === "password") {
      setPassword(e.target.value);
    }
    if (e.target.name === "username") {
      setUsername(e.target.value);
    }
    if (e.target.name === "name") {
      setName(e.target.value);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(register(username, name, email, password));
  };
  return (
    <div
      style={{ minHeight: "calc(100vh - 128px)" }}
      className="flex justify-center items-center"
    >
      <div className=" bg-white mx-auto md:w-1/3 p-6 shadow-md rounded-md">
        <h2 className="text-2xl font-semibold text-blue-500 text-center">
          Signup
        </h2>
        {error && <p className=" font-semibold text-red-500 ">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <label className="text-lg ml-2">Username</label>
            <input
              type="text"
              name="username"
              value={username}
              onChange={handleInputChange}
              className="bg-gray-100 p-2 m-2 border border-gray-400 focus:outline-none"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-lg ml-2">Name</label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={handleInputChange}
              className="bg-gray-100 p-2 m-2 border border-gray-400 focus:outline-none"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-lg ml-2">Email</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleInputChange}
              className="bg-gray-100 p-2 m-2 border border-gray-400 focus:outline-none"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-lg ml-2">Password</label>
            <input
              type="password"
              name="password"
              onChange={handleInputChange}
              className="bg-gray-100 border border-gray-400 p-2 m-2 focus:outline-none"
              value={password}
            />
          </div>
          <button className="text-lg bg-blue-500 text-white py-2 px-4 rounded w-34 mx-auto flex m-2">
            {loading ? "Loading" : "Sign Up"}
          </button>
        </form>
        <Link to="/login">
          <p className=" font-semibold text-purple-500 ">
            Already User? Click Here
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Signup;
