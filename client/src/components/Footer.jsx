import React from "react";

const Footer = () => {
  return (
    <div>
      {/* Top Footer (relative to content) */}
      <footer
        style={{ borderTop: "1px solid #ffffff36", background: "#191d28" }}
        className=" w-full h-[15vh]  text-gray-500 text-[12px] p-4"
      >
        <div className="flex justify-between items-center">
          {/* Left Section */}
          <div className="footer-left">
            <p>Copyright © 2019 HodlInfo.com</p>
          </div>

          {/* Right Section */}
          <div className="footer-right">
            <a
              href="#"
              className="text-[10px] text-gray-500 hover:text-cyan-500 transition"
            >
              Support
            </a>
          </div>
        </div>
      </footer>

      {/* Bottom Fixed Button */}
      <div
        style={{
          height: "6vh",
          margin: "0rem",
          position: "absolute",
          bottom: "0",
        }}
        className="downFoot w-full m-4 bg-[#191d28] inset-x-0 flex justify-center"
      >
        <button className="montserrat text-[13px] border border-cyan-500 text-cyan-500 px-4 py-2 rounded hover:bg-cyan-500 hover:text-gray-900 transition">
          Add hodlinfo to home screen
        </button>
      </div>
    </div>
  );
};

export default Footer;
