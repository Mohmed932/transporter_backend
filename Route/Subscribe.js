import { Router } from "express";
import { SubscribeNewsLatter } from "../Controler/Subscribe.js";

export const SubscribeRoute = Router();

SubscribeRoute.route('/subscribe').post(SubscribeNewsLatter);