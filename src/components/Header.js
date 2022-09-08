import React from "react";

export const Header = () => {
  return (
    <header className="bg-primaryBlue h-80 px-40 pt-5">
      <div className="flex">
        <img src="/logo/white.svg" className="h-11" />
        <span className=" flex items-center gap-8 ml-auto">
          <button className="text-white h-7">Sign In</button>
          <button className="py-3 px-6 bg-white h-12 rounded">
            Dukaan for PC
          </button>
        </span>
      </div>
    </header>
  );
};
