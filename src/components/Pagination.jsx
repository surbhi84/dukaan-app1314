import React from "react";

export const Pagination = () => {
  return (
    <>
      <div className="">
        <div className="text-primaryBlue flex gap-4 justify-center w-full relative ">
          <div className="bg-primaryBlue rounded-[50%] px-[0.55rem] text-white">
            1
          </div>
          <div>2</div>
          <div>3</div>
          <div>...</div>
          <div>21</div>
          <button className=" flex items-center gap-1 absolute right-0">
            Next <img src="/icons/arrow.png" alt="arrow_icon" className="h-3" />
          </button>
        </div>
      </div>
    </>
  );
};
