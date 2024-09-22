import React, { useState } from "react";
import logo from "../assets/logo.png";
import Dropdown1 from "./DropDown1";
import Dropdown2 from "./DropDown2";
import Button1 from "./Button1";
import Timer from "./Timer";
import Button2 from "./Button2";
import Toggle from "./Toggle";
const Navbar = () => {
  const [theme, setTheme] = useState(false);
  return (
    <>
      <div className="m-[2rem] flex item-center justify-between">
        <img className="w-[18%] " src={logo} />
        <div className="flex item-center justify-between">
          <Dropdown1 main={"INR"} options={"PAK"} />
          <Dropdown2 main={"BTC"} options={"BTC"} />
          <Button1 />
        </div>
        <div className="flex item-center justify-between">
          <Timer />
          <Button2 />
          <Toggle />
        </div>
      </div>
    </>
  );
};

export default Navbar;
