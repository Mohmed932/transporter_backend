import { News } from "../Model/News.js";
import { RssFeed } from "../Utility/rssFeed.js";

export const getPolitics = async (req, res) => {
  try {
    const lastNews = await News.find({ kind: "politics" })
      .sort({ createdAt: -1 })
      .limit(10);
    await RssFeed(res, lastNews);
    return res.json({ message: "news send successfully" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const getWorld = async (req, res) => {
  try {
    const lastNews = await News.find({ kind: "world" })
      .sort({ createdAt: -1 })
      .limit(10);
    await RssFeed(res, lastNews);
    return res.json({ message: "news send successfully" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
  
};
export const getBusiness = async (req, res) => {
  try {
    const lastNews = await News.find({ kind: "Business" })
      .sort({ createdAt: -1 })
      .limit(10);
    await RssFeed(res, lastNews);
    return res.json({ message: "news send successfully" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const getSport = async (req, res) => {
  try {
    const lastNews = await News.find({ kind: "sport" })
      .sort({ createdAt: -1 })
      .limit(10);
    await RssFeed(res, lastNews);
    return res.json({ message: "news send successfully" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const getScience = async (req, res) => {
  try {
    const lastNews = await News.find({ kind: "science" })
      .sort({ createdAt: -1 })
      .limit(10);
    await RssFeed(res, lastNews);
    return res.json({ message: "news send successfully" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const getTechnology = async (req, res) => {
  try {
    const lastNews = await News.find({ kind: "technology" })
      .sort({ createdAt: -1 })
      .limit(10);
    await RssFeed(res, lastNews);
    return res.json({ message: "news send successfully" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const getArab = async (req, res) => {
  try {
    const lastNews = await News.find({ kind: "arab" })
      .sort({ createdAt: -1 })
      .limit(10);
    await RssFeed(res, lastNews);
    return res.json({ message: "news send successfully" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const getHealth = async (req, res) => {
  try {
    const lastNews = await News.find({ kind: "health" })
      .sort({ createdAt: -1 })
      .limit(10);
    await RssFeed(res, lastNews);
    return res.json({ message: "news send successfully" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const getCulture = async (req, res) => {
  try {
    const lastNews = await News.find({ kind: "culture" })
      .sort({ createdAt: -1 })
      .limit(10);
    await RssFeed(res, lastNews);
    return res.json({ message: "news send successfully" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const getPalestine = async (req, res) => {
  try {
    const lastNews = await News.find({ kind: "palestine" })
      .sort({ createdAt: -1 })
      .limit(10);
    await RssFeed(res, lastNews);
    return res.json({ message: "news send successfully" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
