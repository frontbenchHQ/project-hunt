import React from "react";

const Login = () => {
    return (
        <div className="m-20 bg-white mx-auto md:w-1/3 p-10 shadow-md rounded-md">
            <h2 className="text-2xl font-semibold text-blue-500 text-center">Login</h2>

            <form>
                <div className="flex flex-col">
                    <label className="text-lg ml-2">Username</label>
                    <input type="text" className="bg-gray-100 p-2 m-2 focus:outline-none" />
                </div>
                <div className="flex flex-col">
                    <label className="text-lg ml-2">Password</label>
                    <input type="password" className="bg-gray-100 p-2 m-2 focus:outline-none" />
                </div>
                <button className="text-lg bg-blue-500 text-white py-2 px-4 rounded w-34 mx-auto flex m-2">
                    Log in
                </button>
            </form>

        </div>
    );
}

export default Login;