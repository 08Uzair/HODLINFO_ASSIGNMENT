import React from "react";

const Loader = () => {
  return (
    <div className="flex items-center justify-center mt-[12rem]">
      <div className="relative">
        <div className="w-32 h-32 rounded-full border-[20px] border-t-[20px] border-gray-300 border-t-teal-400 animate-spin"></div>
      </div>
    </div>
  );
};

export default Loader;
