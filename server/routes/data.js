import { addData, getData } from "../controllers/data.js";
import express from "express";

export const dataRouter = express.Router();
dataRouter.post("/", addData);
dataRouter.get("/", getData);
