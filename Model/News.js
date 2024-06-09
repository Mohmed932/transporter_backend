import { Schema, model } from "mongoose";

const News_Data = new Schema(
  {
    title: {
      type: String,
      required: false,
    },
    kind: {
      type: String,
      required: false,
    },
    views: {
      type: Number,
      default: 0,
    },
    img: {
      type: String,
      required: false,
    },
    desc: [
      {
        type: String,
      },
    ],
  },
  { timestamps: true }
);

export const News = model("News", News_Data);
