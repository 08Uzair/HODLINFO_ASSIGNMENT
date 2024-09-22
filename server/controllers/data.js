import axios from "axios";
import { data } from "../model/data.js";

const fetchData = async () => {
  try {
    const response = await axios.get("https://api.wazirx.com/api/v2/tickers");

    const coins = Object.values(response.data);

    const data1 = coins.slice(0, 10);
    return data1;
  } catch (error) {
    console.log(error);
  }
};

export const addData = async (req, res) => {
  try {
    const apiData = await fetchData();

    for (const item of apiData) {
      const { name, last, buy, sell, volume, base_unit } = item;

      const saveData = new data({
        name,
        last,
        buy,
        sell,
        volume,
        base_unit,
        createdAt: new Date().toISOString(),
      });

      await saveData.save();
    }

    res.status(200).json({ message: "Added Successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: `${error}` });
  }
};

//GET DATA

export const getData = async (req, res) => {
  try {
    const coinData = await data.find().sort({ createdAt: -1 });
    res.status(200).json({ coinData });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "failed" });
  }
};
