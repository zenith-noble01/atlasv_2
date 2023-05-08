import React, { useState } from "react";
import { Link } from "react-router-dom";

function LoginRegisterButton() {
  const [isLoginHovered, setIsLoginHovered] = useState(false);
  return (
    <>
      <Link
        to="/login"
        className={isLoginHovered ? "cta__btn active" : "cta__btn acti"}
        onMouseEnter={() => setIsLoginHovered(true)}
        onMouseLeave={() => setIsLoginHovered(false)}
      >
        Login
      </Link>
      <Link
        to="/register"
        className={!isLoginHovered ? "cta__btn active" : "cta__btn"}
      >
        Register
      </Link>
    </>
  );
}

export default LoginRegisterButton;
