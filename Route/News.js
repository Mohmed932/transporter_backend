import { Router } from "express";
import {
  getBreakingNews,
  getBusinessNews,
  getCultureNews,
  getLatestNews,
  getMiddelEstNews,
  getPalestineNews,
  getPoliticsNews,
  getScienceNews,
  getSingleNews,
  getSportNews,
  getTopnews,
  getWorldNews,
} from "../Controler/News.js";

export const HomeRoute = Router();

HomeRoute.route("/topnews").get(getTopnews);
HomeRoute.route("/breakingnews").get(getBreakingNews);
HomeRoute.route("/section/politics").get(getPoliticsNews);
HomeRoute.route("/section/world").get(getWorldNews);
HomeRoute.route("/section/business").get(getBusinessNews);
HomeRoute.route("/section/sport").get(getSportNews);
HomeRoute.route("/section/science").get(getScienceNews);
// HomeRoute.route("/section/technology").get(getTechnology);
HomeRoute.route("/section/arab").get(getMiddelEstNews);
// HomeRoute.route("/section/health").get(getHealth);
HomeRoute.route("/section/palestine").get(getPalestineNews);
HomeRoute.route("/section/culture").get(getCultureNews);
HomeRoute.route("/section/latest").get(getLatestNews);
HomeRoute.route("/news/:id").get(getSingleNews);
