import { News } from "../Model/News.js";

export const getTopnews = async (req, res) => {
  try {
    const topNews = await News.find()
    .sort({ createdAt: -1, views: -1 })
    .limit(4)
    .lean();
    return res.json({ topNews });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getBreakingNews = async (req, res) => {
  try {
    const BreakingNews = await News.find({}).sort({ createdAt: -1 }).limit(4);
    return res.json({ BreakingNews });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getWorldNews = async (req, res) => {
  try {
    const Category = await News.find({ kind: "world" })
      .sort({ createdAt: -1 })
      .limit(8);
    return res.json(Category);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const getMiddelEstNews = async (req, res) => {
  try {
    const Category = await News.find({ kind: "arab" })
      .sort({ createdAt: -1 })
      .limit(2);
    return res.json(Category);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const getPalestineNews = async (req, res) => {
  try {
    const Category = await News.find({ kind: "palestine" })
      .sort({ createdAt: -1 })
      .limit(8);
    return res.json(Category);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const getCultureNews = async (req, res) => {
  try {
    const Category = await News.find({ kind: "culture" })
      .sort({ createdAt: -1 })
      .limit(3);
    return res.json(Category);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const getBusinessNews = async (req, res) => {
  try {
    const Category = await News.find({ kind: "Business" })
      .sort({ createdAt: -1 })
      .limit(6);
    return res.json(Category);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const getScienceNews = async (req, res) => {
  try {
    const Category = await News.find({ kind: "science" })
      .sort({ createdAt: -1 })
      .limit(3);
    return res.json(Category);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const getSportNews = async (req, res) => {
  try {
    const Category = await News.find({ kind: "sport" })
      .sort({ createdAt: -1 })
      .limit(3);
    return res.json(Category);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const getPoliticsNews = async (req, res) => {
  try {
    const Category = await News.find({ kind: "politics" })
      .sort({ createdAt: -1 })
      .limit(3);
    return res.json(Category);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const getLatestNews = async (req, res) => {
  try {
    const Latest = await News.find({}).sort({ createdAt: -1 }).limit(9);
    return res.json(Latest);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const getSingleNews = async (req, res) => {
  try {
    const singleNews = await News.findOneAndUpdate(
      { _id: req.params.id },
      { $inc: { views: 1 } },
      { new: true }
    );
    if (!singleNews) {
      return res
        .status(400)
        .json({ message: "this news not found or has been deleted" });
    }
    return res.json(singleNews);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
