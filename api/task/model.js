// build your `Task` model here
//MVP: just need single find() for MVP router
const db = require("../../data/dbConfig");

async function find() {
  return await db("tasks as t")
    .leftJoin("projects as p")
    .select(
      "t.task_id",
      "t.task_description",
      "t.task_notes",
      "t.task_completed",
      "t.project_id",
      "p.project_name",
      "p.project_description"
    );
}

async function insert(task) {
  return await db("tasks").insert(task);
}

module.exports = {
  find,
  insert,
};
