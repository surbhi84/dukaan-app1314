import React from "react";
import { AboutContent } from "./AboutContent";
import { Pagination } from "./Pagination";
import { SloganResults } from "./SloganResults";

export const MainContent = () => {
  return (
    <div className="flex flex-col gap-12 rounded-lg  bg-white mx-40 px-48 py-16 text-black12  ">
      <div className="flex flex-col gap-4">
        <h3 className=" text-4xl font-bold ">Free slogan maker</h3>
        <p className="text-black30 text-xl">
          Simply enter a term that describes your business, and get up to 1,000
          relevant slogans for free.
        </p>
      </div>
      <div>
        <label className="flex flex-col gap-2 text-black30 font-medium ">
          Word for your slogan
          <div className="flex items-center w-[22rem] px-3 py-4 border border-black85 rounded-lg">
            <input type="text" className=" outline-none" value="Cozy" />
            <span className="ml-auto">
              <img src="/icons/Union.png" alt="cross_icon" />
            </span>
          </div>
        </label>
      </div>
      <button className=" flex w-52 justify-center py-3 px-6 bg-primaryBlue h-12 rounded font-medium text-white">
        Generate slogans
      </button>
      <hr className="bg-black85" />
      <SloganResults />
      <hr className="bg-black85" />
      <Pagination />
    </div>
  );
};
