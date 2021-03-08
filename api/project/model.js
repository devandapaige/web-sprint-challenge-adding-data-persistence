// build your `Project` model here
//MVP: just need find() and insert() for MVP router
const db = require("../../data/dbConfig");

async function find() {
  const allProjects = await db("projects");
  return allProjects.map((results) => {
    return {
      ...results,
      project_completed: results.project_completed == 1 ? true : false,
    };
  });
}

async function insert(project) {
  const [project_id] = await db("projects").insert(project);
  const newProject = db("projects").where({ project_id }).first();
  return newProject.map((results) => {
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
