import { Subscribe } from "../Model/Subscribe.js";
export const SubscribeNewsLatter = async (req, res) => {
  try {
    const newSubscribe = await Subscribe.findOne({ email: req.body.email });
    if (newSubscribe) {
      return res
        .status(400)
        .json({ message: "this email is already Subscribed" });
    }
    const SubscribeNews = new Subscribe({ email: req.body.email });
    await SubscribeNews.save();
    return res.json({ message: "thank you for subscribings" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
