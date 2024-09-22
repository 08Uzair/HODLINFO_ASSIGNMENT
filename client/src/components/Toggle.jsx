import React, { useState, useEffect } from "react";

const Toggle = () => {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  useEffect(() => {
    if (isToggled) {
      document.body.classList.add("light");
      document.body.classList.remove("dark");
    } else {
      document.body.classList.add("dark");
      document.body.classList.remove("light");
    }
  }, [isToggled]);

  return (
    <div className="flex items-center justify-center ml-4">
      <button
        onClick={handleToggle}
        className={`relative inline-flex items-center h-[40px] w-[80px] rounded-full transition-colors duration-300 focus:outline-none shadow-md ${
          isToggled ? "bg-[#f5f7f8]" : "bg-[#2c2e3f]"
        }`}
        style={{
          border: "1px solid rgba(0, 0, 0, 0.1)",
        }}
      >
        <span
          className={`absolute left-1 top-1 h-[30px] w-[30px] rounded-full transition-transform duration-300 ease-in-out transform ${
            isToggled
              ? "bg-[#43c6c6] translate-x-[40px]"
              : "bg-[#2ccbd0] translate-x-0"
          }`}
        ></span>
      </button>
    </div>
  );
};

export default Toggle;
