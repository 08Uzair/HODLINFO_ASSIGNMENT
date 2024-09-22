import mongoose from "mongoose";

const dataSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  last: {
    type: String,
    required: true,
  },
  buy: {
    type: String,
    required: true,
  },
  sell: {
    type: String,
    required: true,
  },
  volume: {
    type: String,
    required: true,
  },
  base_unit: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const data = mongoose.model("data", dataSchema);
