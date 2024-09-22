import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../redux/actions/data.js";

const Dropdown2 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");
  const dispatch = useDispatch();

  const coinData = useSelector((state) => state.data.coinData);

  // Fetch the data once when the component is mounted
  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Function to handle selecting a value
  const handleSelect = (name) => {
    setSelectedValue(name);
    setIsOpen(false); // Close dropdown after selecting a value
  };

  return (
    <div className="ml-4 relative">
      <button
        id="dropdownDefaultButton"
        onClick={toggleDropdown}
        className="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
        type="button"
      >
        {selectedValue || "Select Coin"}
        <svg
          className="w-2.5 h-2.5 ms-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>

      {isOpen && (
        <div
          id="dropdown"
          className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-[5rem] dark:bg-white-700 absolute"
        >
          <ul className="py-2 text-sm text-black dark:text-black-200">
            {coinData && coinData.length > 0 ? (
              coinData.map((item, index) => (
                <li key={index}>
                  <button
                    className="block px-4 py-2 "
                    onClick={() => handleSelect(item.name)}
                  >
                    {item.name}
                  </button>
                </li>
              ))
            ) : (
              <li className="px-4 py-2">No Data</li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown2;
