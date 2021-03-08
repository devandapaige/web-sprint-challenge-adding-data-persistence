// build your `Task` model here
//MVP: just need single find() for MVP router
const db = require("../../data/dbConfig");

async function find() {
  const allTasks = await db("tasks as t")
    .leftJoin("projects as p", "p.project_id", "t.project_id")
    .select(
      "t.task_id",
      "t.task_description",
      "t.task_notes",
      "t.task_completed",
      "p.project_name",
      "p.project_description"
    );
  return allTasks.map((results) => {
    return {
      ...results,
      task_completed: results.task_completed == 1 ? true : false,
    };
  });
}

async function insert(task) {
  const [task_id] = await db("tasks").insert(task);
  const newTask = db("tasks").where({ task_id }).first();
  return newTask.map((results) => {
    return {
      ...results,
      task_completed: results.task_completed == 1 ? true : false,
    };
  });
}

module.exports = {
  find,
  insert,
};
