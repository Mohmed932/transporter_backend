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
    more_details: {
      one: {
        type: String,
        required: false,
      },
      two: {
        type: String,
        required: false,
      },
      three: {
        type: String,
        required: false,
      },
      four: {
        type: String,
        required: false,
      },
      five: {
        type: String,
        required: false,
      },
      six: {
        type: String,
        required: false,
      },
      seven: {
        type: String,
        required: false,
      },
      eight: {
        type: String,
        required: false,
      },
      nine: {
        type: String,
        required: false,
      },
      ten: {
        type: String,
        required: false,
      },
      eleven: {
        type: String,
        required: false,
      },
      twelve: {
        type: String,
        required: false,
      },
      thirteen: {
        type: String,
        required: false,
      },
      fourteen: {
        type: String,
        required: false,
      },
      fifteen: {
        type: String,
        required: false,
      },
      sixteen: {
        type: String,
        required: false,
      },
      seventeen: {
        type: String,
        required: false,
      },
      eighteen: {
        type: String,
        required: false,
      },
      nineteen: {
        type: String,
        required: false,
      },
      twenty: {
        type: String,
        required: false,
      },
    },
  },
  { timestamps: true }
);

export const News = model("News", News_Data);