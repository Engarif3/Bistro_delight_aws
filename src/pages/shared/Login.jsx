import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="min-h-screen flex justify-center items-center  flex-col">
      <h2 className="text-center text-orange-600 text-3xl mb-8">
        The is under development. You will get it very soon...
      </h2>
      <Link to="/" className="btn btn-sm bg-cyan-600">
        Go to home
      </Link>
    </div>
  );
};

export default Login;
