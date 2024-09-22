import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../redux/actions/data.js";
import Loader from "./Loader.jsx";
import Footer from "./Footer.jsx";

const Table = () => {
  const [dataId, setDataId] = useState(0);
  const dispatch = useDispatch();

  const coinData = useSelector((state) => state.data.coinData);
  console.log(coinData);
  useEffect(() => {
    setDataId(dataId + 1);
    dispatch(getData());
  }, []);
  return (
    <>
      {!coinData ? (
        <Loader />
      ) : (
        <>
          <div className="relative  shadow-md rounded-lg m-10">
            <table className="w-full h-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-[#3dc6c1] text-[20px]"
                  >
                    #
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Last Traded Price
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Buy / Sell Price
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Volume
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Base Unit
                  </th>
                </tr>
              </thead>
              <tbody>
                {coinData?.map((item, index) => (
                  <tr
                    key={item.id}
                    className=" mb-4 border-b  bg-[transparent]"
                  >
                    <td className="px-6 py-4">{index + 1}</td>
                    <td className="px-6 py-4 font-medium text-[#6e6e6e]">
                      {item.name}
                    </td>
                    <td className="px-6 py-4">{item.last}</td>
                    <td className="px-6 py-4">
                      `${item.buy} / {item.sell}`
                    </td>
                    <td className={"px-6 py-4"}>{item.volume}</td>
                    <td className={"px-6 py-4 "}>{item.base_unit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <Footer />
        </>
      )}
    </>
  );
};

export default Table;
