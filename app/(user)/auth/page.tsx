"use client";

import React from "react";
import Login from "./Login";
import SignUp from "./Signup";

export default function ProfileForm() {
  const [isLogin, setIsLogin] = React.useState(false);

  return (
    <div className="px-10 py-6 desktop:px-20">
      <h1 className="text heading mb-16">{isLogin ? "Login" : "Signup"}</h1>

      {isLogin ? <Login /> : <SignUp />}

      <p className="text">
        {isLogin ? "Don't" : "Already"} have an account ?{" "}
        <span
          className="font-semibold cursor-pointer"
          onClick={() => {
            setIsLogin(!isLogin);
          }}
        >
          {isLogin ? "Signup" : "Login"}
        </span>
      </p>
    </div>
  );
}
