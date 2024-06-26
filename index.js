import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import {config} from "dotenv"
import { CategoryRoute } from "./Route/Category.js";
import { HomeRoute } from "./Route/News.js";
import { SubscribeRoute } from "./Route/Subscribe.js";
import { MailToDatebase } from "./Utility/MailToDatebase.js";
import { CategoryXmlRoute } from "./Route/CategoryFeed.js";


config();
const server = express();

server.use(express.json());
server.use(cors());
server.use(CategoryRoute);
server.use(CategoryXmlRoute);
server.use(HomeRoute);
server.use(SubscribeRoute);
server.get("/", (req, res) => {
  try {
    return res.json({ message: "Hello world" });
  } catch (error) {
    console.error(error);
  }
});


setInterval(async () => {
  await MailToDatebase();
}, 1000 * 60 * 60 * 24);

mongoose.connect(process.env.MONGODB_URL).then(()=>{
  const port = process.env.PORT || 5000;
  server.listen(port, () => {
    console.log(`server listening on port ${port}`);
  });
}).catch(()=>{
  console.log("Connect to Mongoose failed")
});


server.use("*", (req, res) => {
  try {
    return res.status(404).json({ message: `this route is not available` });
  } catch (error) {
    return res.json({ message: error.message });
  }
});