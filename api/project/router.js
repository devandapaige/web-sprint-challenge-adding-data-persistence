// build your `/api/projects` router here
const express = require("express");
const Projects = require("./router");
const router = express.Router();
//MVP:
//[POST] /api/projects
//[GET] /api/projects
router.get("/api/projects", async (req, res, next) => {
  try {
    res.status(200).json(await Projects.find());
  } catch (err) {
    next(err);
  }
});
router.post("/api/projects", async (req, res, next) => {
  try {
    res.status(201).json(await Projects.insert());
  } catch (err) {
    next(err);
  }
});

module.exports = router;
