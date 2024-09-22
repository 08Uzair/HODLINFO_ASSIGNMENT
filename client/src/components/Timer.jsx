import React, { useState, useEffect } from "react";

const Timer = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const endDate = new Date("01/01/2025 00:00:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = endDate - now;

      const s = Math.floor((distance % (1000 * 60)) / 1000);
      setSeconds(s);

      // Update the circle stroke offset based on remaining seconds
      const ss = document.getElementById("ss");
      ss.style.strokeDashoffset = 440 - (440 * s) / 60;
    }, 1000);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <div
      className="relative w-[40px] h-[40px] flex items-center justify-center rounded-full ]"
      style={{ "--clr": "#3dc6c1", border: "3px solid #3dc6c1" }}
    >
      <svg className="relative w-[50px] h-[50px] rotate-[-90deg]">
        <circle
          className="w-full h-full fill-{#3dc6c1} stroke-[8px] stroke-[var(--clr)] stroke-linecap-round translate-x-[5px] translate-y-[5px]"
          id="ss"
          strokeDasharray="440"
        ></circle>
      </svg>
      <div className="absolute font-medium text-[var(--clr)] z-[10000] text-[1em]">
        {seconds < 10 ? `0${seconds}` : seconds}
        <br />
      </div>
    </div>
  );
};

export default Timer;
