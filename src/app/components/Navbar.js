"use client";
import Image from "next/image";
import React, { useState } from "react";
import logo from "../../../public/Assets/Paysa_Logo.png";
import Hamburger from "../../../public/Assets/Hamburger.png";
import chevron_down from "../../../public/Assets/chevron-down.svg";

import Link from "next/link";
function Navbar() {
  const [navbar, setNavbar] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleNavbar = () => {
    setNavbar(!navbar);
  };
  return (
    <div className=" ">
      <div className="container navbarTop">
        <div className="header">
          <div >
            <Link className="link" href={"/"}>
            <Image src={logo}  className="logo"/>
            </Link>
          </div>
          <div className="menuItems">
            <ul className="menu">
              <li>
                <Link className="link" href={"/"}>
                  Home
                </Link>
              </li>

              <li>
                <Link className="link" href={"/services"}>
                  Services
                </Link>
              </li>
              <li>
                <Link className="link" href={"/articles"}>
                  Articles
                </Link>
              </li>
              <li>
                <Link className="link" href={"/aboutus"}>
                  About Us
                </Link>
              </li>
              <li>
                <Link className="link" href={"/contactus"}>
                  Contact Us
                </Link>
              </li>
              <li>
                <Link className="link" href={"/careers"}>
                  Careers
                </Link>
              </li>
            </ul>
          </div>
          <div className="createAccount">
          <Link className="link1" href={"/contactus"}>
                  
                
            <button className="button">Get in touch</button>
            </Link>
          </div>

          <div className="hamburgerDiv">
            <Image
              src={Hamburger}
              className="Hamburger"
              onClick={handleNavbar}
            />
          </div>
        </div>
      </div>
      {navbar ? (
        <div className="responsiveNav">
          {" "}
          <div className=" pt-4 ">
            <ul className="menu  flex-column responsiveNavmenu">
              <li
                onClick={() => {
                  setNavbar(false);
                }}
              >
                <Link className="link" href={"/"}>
                  Home
                </Link>
              </li>

              <li
                onClick={() => {
                  setNavbar(false);
                }}
              >
                <Link className="link" href={"/services"}>
                  Services
                </Link>
              </li>
              <li
                onClick={() => {
                  setNavbar(false);
                }}
              >
                <Link className="link" href={"/articles"}>
                  Articles
                </Link>
              </li>
              <li
                onClick={() => {
                  setNavbar(false);
                }}
              >
                <Link className="link" href={"/aboutus"}>
                  About Us
                </Link>
              </li>
              <li
                onClick={() => {
                  setNavbar(false);
                }}
              >
                <Link className="link" href={"/contactus"}>
                  Contact Us
                </Link>
              </li>

              <li
                onClick={() => {
                  setNavbar(false);
                }}
              >
                <Link className="link" href={"/careers"}>
                  Careers
                </Link>
              </li>
            </ul>
          </div>
          <div className="responsiveNavButton">
            <button
              className="button  ms-4 "
              onClick={() => {
                setNavbar(false);
              }}
            >
              Get in touch
            </button>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Navbar;
