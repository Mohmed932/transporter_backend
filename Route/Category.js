import { Router } from "express";
import {
  getAfrica,
  getAmerica,
  getArab,
  getBusiness,
  getCulture,
  getHealth,
  getPalestine,
  getPolitics,
  getSport,
  getTechnology,
  getWorld,
} from "../Controler/Category.js";

export const CategoryRoute = Router();

CategoryRoute.route("/politics").get(getPolitics);
CategoryRoute.route("/world").get(getWorld);
CategoryRoute.route("/Business").get(getBusiness);
CategoryRoute.route("/sport").get(getSport);
CategoryRoute.route("/culture").get(getCulture);
CategoryRoute.route("/technology").get(getTechnology);
CategoryRoute.route("/arab").get(getArab);
CategoryRoute.route("/health").get(getHealth);
CategoryRoute.route("/africa").get(getAfrica);
CategoryRoute.route("/america").get(getAmerica);
CategoryRoute.route("/palestine").get(getPalestine);

