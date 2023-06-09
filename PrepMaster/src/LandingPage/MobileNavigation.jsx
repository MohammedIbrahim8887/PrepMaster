import React, { useState } from "react";
import logo from "./../assets/logo.svg";
import top from "./../assets/Top-Menu.svg";
import active from "./../assets/active-Top-Menu.svg";
import CustomButton from "../Components/CustomButton";
import { NavLink } from "react-router-dom";
import Signup from "../Signup/Signup";
import { Button } from "@mui/material";
import Signin from "../Signin/Signin";
import SigninButton from "../Components/SigninButton";

export function MobileNavigation() {
  const [isActive, setIsActive] = useState(false);

  const handleImageClick = () => {
    setIsActive(!isActive);
  };
  const handleScrollTo = (tag) => {
    const element = document.getElementById(tag);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 195,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="md:hidden flex flex-col fixed-mobile-nav justify-between items-center z-50 ">
      <div className="flex flex-row justify-between items-center">
        <img src={logo} alt="prepmaster" className="w-2/3" />
        <img
          src={isActive ? active : top}
          alt="icon"
          onClick={handleImageClick}
        />
      </div>
      <div className={`${isActive ? "visible" : "hidden"} `}>
        <ul className="py-6 font-medium text-lg flex flex-col gap-2 justify-center self-center">
          <li
            className="z-50 py-2 self-center cursor-pointer"
            onClick={() => {
              setIsActive(false);
              handleScrollTo("home");
            }}
          >
            Home
          </li>
          <li
            className="z-50 py-2 self-center cursor-pointer"
            onClick={() => {
              setIsActive(false);
              handleScrollTo("services");
            }}
          >
            Services
          </li>
          <li
            className="z-50 py-2 self-center cursor-pointer"
            onClick={() => {
              setIsActive(false);
              handleScrollTo("pricing");
            }}
          >
            Pricing
          </li>
          <li
            className="z-50 py-2 self-center cursor-pointer"
            onClick={() => {
              setIsActive(false);
              handleScrollTo("contact");
            }}
          >
            Contact
          </li>
          <li className="py-2 self-center">
            <NavLink to="Signin" element={<Signin />}>
              <SigninButton text={"Sign in"} padding={"0.7rem 2.45rem"} />
            </NavLink>
          </li>
          <li className="py-2">
            <NavLink to="Signup" element={<Signup />}>
              <CustomButton text={"Try for free"} padding={"0.7rem 1.7rem"} />
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}
