// build your `/api/resources` router here
const express = require("express");
const Resource = require("./model");

const router = express.Router();
//MVP:
//[POST] /api/resources
//[GET] /api/resources
router.get("/api/resources", async (req, res, next) => {
  try {
    res.status(200).json(await Resource.find());
  } catch (err) {
    next(err);
  }
});
router.post("/api/resources", async (req, res, next) => {
  try {
    res.status(201).json(await Resource.insert());
  } catch (err) {
    next(err);
  }
});

module.exports = router;
