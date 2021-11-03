import React from "react";
import FacebookIcon from "../assets/icon/facebook.svg";
import InstagramIcon from "../assets/icon/instagram.svg";
import TwitterIcon from "../assets/icon/twitter.svg";
const Footer = () => {
  return (
    <div className="flex flex-col sm:flex-row text-center items-center justify-between bg-gray-800 px-4 py-7">
      <div className="flex items-center">
        <a href="https://amrullah.dev">
          <img src={InstagramIcon} className="mr-10" />
        </a>
        <a href="https://amrullah.dev">
          <img src={FacebookIcon} className="mr-10" />
        </a>
        <a href="https://amrullah.dev">
          <img src={TwitterIcon} className="mr-10" />
        </a>
      </div>
      <p className="inline-flex text-white px-2 pt-6 leading-6">
        Terms & Condition | Copyright © 2018. All rights reserved. PT Radya Gita
        Bahagi
      </p>
    </div>
  );
};

export default Footer;
