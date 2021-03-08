// build your `Task` model here
//MVP: just need single find() for MVP router
const db = require("../../data/dbConfig");

async function find() {
  return await db("tasks as t")
    .leftJoin("projects as p", "p.project_id", "t.project_id")
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
  const [task_id] = await db("tasks").insert(task);
  return db("resources").where({ task_id }).first();
}

module.exports = {
  find,
  insert,
};
