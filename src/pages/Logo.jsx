import React from "react";
import logo from "../assets/logo.png"; 

const Logo = () => {
  return (
    <div>
      <img
        src={logo}
        alt="Trendy Product Hub Logo"
        style={{ width: "180px", height: "auto" }} 
      />
    </div>
  );
};

export default Logo;
