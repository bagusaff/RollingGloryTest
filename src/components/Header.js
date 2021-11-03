import React from "react";
import HeaderLogo from "../assets/logo/logo-dummy.png";
const Header = () => {
  return (
    <nav className="p-4">
      <img alt="Logo" src={HeaderLogo} className="cursor-pointer" />
    </nav>
  );
};

export default Header;
