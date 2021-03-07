// build your `/api/projects` router here
const express = require("express");
const Project = require("./model");
const router = express.Router();
//MVP:
//[POST] /api/projects
//[GET] /api/projects
router.get("/api/projects", async (req, res, next) => {
  try {
    res.status(200).json(await Project.find());
  } catch (err) {
    next(err);
  }
});
router.post("/api/projects", async (req, res, next) => {
  try {
    res.status(201).json(await Project.insert(req.body));
  } catch (err) {
    next(err);
  }
});

module.exports = router;
