import React from "react";

export const AboutContent = () => {
  return (
    <div className="bg-primaryBlue bg-opacity-5 flex justify-center px-40 text-base py-[4.75rem] gap-8 text-black12 ">
      <div className="flex flex-col items-center w-[22rem] ">
        <img
          src="/images/search.svg"
          alt="search_slogan_svg"
          className="h-12 mb-7"
        />
        <h5 className="text-xl pb-2">Search</h5>
        <p className="text-black30">
          Simply add a keyword or a term related to your business in the slogan
          maker search box. Wait for the magic to happen.
        </p>
      </div>
      <div className="flex flex-col items-center w-[22rem]">
        <img
          src="/images/select.svg"
          alt="search_slogan_svg"
          className="w-14 h-12 mb-7"
        />
        <h5 className="text-xl pb-2">Select</h5>
        <p className="text-black30">
          Choose from thousands of options generated by the slogan maker that
          fit your needs.
        </p>
      </div>
      <div className="flex flex-col items-center w-[22rem]">
        <img
          src="/images/standOut.svg"
          alt="search_slogan_svg"
          className="w-14 h-14 mb-5"
        />
        <h5 className="text-xl pb-2">Stand Out</h5>
        <p className="text-black30">
          Congrats on your new slogan. It's time to win the world!
        </p>
      </div>
    </div>
  );
};
