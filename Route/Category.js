import { Router } from "express";
import {
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

CategoryRoute.route("/category/politics").get(getPolitics);
CategoryRoute.route("/category/world").get(getWorld);
CategoryRoute.route("/category/business").get(getBusiness);
CategoryRoute.route("/category/sport").get(getSport);
// CategoryRoute.route("/category/science").get(getScience);
CategoryRoute.route("/category/technology").get(getTechnology);
CategoryRoute.route("/category/arab").get(getArab);
CategoryRoute.route("/category/health").get(getHealth);
CategoryRoute.route("/category/culture").get(getCulture);
CategoryRoute.route("/category/palestine").get(getPalestine);

