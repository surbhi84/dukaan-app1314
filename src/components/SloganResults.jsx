import React, { useState } from "react";
import { staticData } from "../staticData";

export const SloganResults = () => {
  const [showText, setShowText] = useState("");
  return (
    <div className="relative">
      <div className="flex flex-col gap-14 absolute -left-32 top-80">
        {showText === "copy" && (
          <div className="bg-black30 px-2 py-1 w-fit rounded text-white">
            Click to copy
          </div>
        )}
        {showText === "copied" && (
          <div className="bg-black30 px-2 py-1 w-fit rounded text-white">
            Copied!
          </div>
        )}
      </div>
      <div className="flex justify-between items-center pb-9">
        <h5 className="text-xl text-black12 font-semibold">
          We have generated 1,023 slogans for “cozy”
        </h5>
        <button className="px-6 py-2 text-primaryBlue border-2 border-primaryBlue rounded-md">
          Download all
        </button>
      </div>
      <div className="flex flex-wrap justify-center gap-5 text-black12">
        {staticData.map((data) => (
          <p
            className="py-2 px-4 bg-black95 w-[22rem]"
            onClick={() => {
              navigator.clipboard.writeText(data);
              setShowText("copied");
            }}
            onMouseOver={() => setShowText("copy")}
            onMouseOut={() => setShowText("")}
          >
            {data}
          </p>
        ))}
      </div>
    </div>
  );
};
