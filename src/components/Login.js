import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <img
        className="absolute"
        alt=""
        src="https://assets.nflxext.com/ffe/siteui/vlv3/5e16108c-fd30-46de-9bb8-0b4e1bbbc509/29d8d7d7-83cc-4b5f-aa9b-6fd4f68bfaa6/IN-en-20240205-popsignuptwoweeks-perspective_alpha_website_large.jpg"
      />
      <form className="bg-black text-white absolute p-16 m-10 w-3/12 my-24 mx-auto right-0 left-0">
        <div className="text-3xl font-bold m-3">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </div>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-3 m-3 w-full bg-transparent border rounded-sm border-gray-500"
          ></input>
        )}
        <input
          type="text"
          placeholder="Email or phone number"
          className="p-3 m-3 w-full bg-transparent border rounded-sm border-gray-500"
        ></input>
        <input
          type="password"
          placeholder="Password"
          className="p-3 m-3 w-full bg-transparent border rounded-sm border-gray-500"
        ></input>
        <button className="p-2 w-full m-2 bg-red-600 rounded-l">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-6 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Existing User? Click Here to Sign In"}
        </p>
      </form>
    </div>
  );
};

export default Login;
