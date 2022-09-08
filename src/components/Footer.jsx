import React from "react";

export const Footer = () => {
  return (
    <div className="flex flex-col gap-6 px-40 py-16 mt-auto bg-black12 text-white">
      <div className="flex">
        <img src="/logo/white.svg" alt="dukaan_logo" className="h-11" />
        <div className="flex gap-24 ml-28">
          <div className="flex flex-col gap-1">
            <a href="#">Contact</a>
            <a href="#">FAQ's</a>
          </div>
          <div className="flex flex-col gap-1">
            <a href="#">Tutorials</a>
            <a href="#">Blog</a>
          </div>
          <div className="flex flex-col gap-1">
            <a href="#">Privacy</a>
            <a href="#">Banned Items</a>
          </div>
          <div className="flex flex-col gap-1">
            <a href="#">About</a>
            <a href="#">
              Jobs
              <span className="ml-1 bg-white rounded-[50%] px-[0.3rem] text-black12">
                3
              </span>
            </a>
          </div>
          <div className="flex flex-col gap-1">
            <a href="#">Facebook</a>
            <a href="#">Twitter</a>
            <a href="#">LinkedIn</a>
          </div>
        </div>
      </div>
      <hr className="bg-white" />
      <div className="flex gap-2">
        <small>Dukaan 2020, All rights reserved.</small>
        <small className=" flex ml-auto">Made in </small>
        <img src="/icons/Frame.png" alt="indian_flag" />
      </div>
    </div>
  );
};
