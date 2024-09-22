import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { dataRouter } from "./routes/data.js";
import { dataBaseConnection } from "./db/connection.js";

const app = express();
const PORT = 8000;
app.use(cors());
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use("/api/v1/data", dataRouter);
dataBaseConnection();
app.listen(PORT, () => {
  console.log(`Server Connected To Port ${PORT}`);
}); 
