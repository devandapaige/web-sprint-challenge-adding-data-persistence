// build your `/api/tasks` router here
const express = require("express");
const Task = require("./router");
const router = express.Router();
//MVP:
//[POST] /api/tasks
//[GET] /api/tasks
router.get("/api/tasks", async (req, res, next) => {
  try {
    res.status(200).json(await Task.find());
  } catch (err) {
    next(err);
  }
});
router.post("/api/tasks", async (req, res, next) => {
  try {
    res.status(201).json(await Task.insert());
  } catch (err) {
    next(err);
  }
});

module.exports = router;
