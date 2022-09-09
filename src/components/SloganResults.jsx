import React from "react";
import { staticData } from "../staticData";

export const SloganResults = () => {
  return (
    <div>
      <div className="flex justify-between items-center pb-9">
        <h5 className="text-xl text-black12 font-semibold">
          We have generated 1,023 slogans for “cozy”
        </h5>
        <button className="px-6 py-2 text-primaryBlue border-2 border-primaryBlue rounded-md">
          Download all
        </button>
      </div>
      <div className="flex flex-wrap gap-5 text-black12">
        {staticData.map((data) => (
          <p className="py-2 px-4 bg-black95 w-[22rem]">{data}</p>
        ))}
      </div>
    </div>
  );
};