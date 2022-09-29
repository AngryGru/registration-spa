import React from "react";
import "./Header.css";
import Logo from "../../assets/Logo";

function Header() {
  return (
    <div className="headerContainer">
      <Logo width={"55px"} height={"55px"} fill={"#FEC260"} />
      <div>Registration SPA</div>
    </div>
  );
}

export default Header;
