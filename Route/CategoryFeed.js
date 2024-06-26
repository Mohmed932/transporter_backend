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
} from "../Controler/CategoryFeed.js";

export const CategoryXmlRoute = Router();

CategoryXmlRoute.route("/category/politics.xml").get(getPolitics);
CategoryXmlRoute.route("/category/world.xml").get(getWorld);
CategoryXmlRoute.route("/category/business.xml").get(getBusiness);
CategoryXmlRoute.route("/category/sport.xml").get(getSport);
// CategoryXmlRoute.route("/category/science.xml").get(getScience);
CategoryXmlRoute.route("/category/technology.xml").get(getTechnology);
CategoryXmlRoute.route("/category/arab.xml").get(getArab);
CategoryXmlRoute.route("/category/health.xml").get(getHealth);
CategoryXmlRoute.route("/category/culture.xml").get(getCulture);
CategoryXmlRoute.route("/category/palestine.xml").get(getPalestine);

