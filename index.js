import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import {config} from "dotenv"
import { CategoryRoute } from "./Route/Category.js";


config();
const server = express();

server.use(express.json());
server.use(cors());
server.use(CategoryRoute);
server.get("/", (req, res) => {
  try {
    return res.json({ message: "Hello world" });
  } catch (error) {
    console.error(error);
  }
});


mongoose.connect(process.env.MONGODB_URL).then(()=>{
  server.listen(5000, () => {
    console.log("server listening on port 5000");
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