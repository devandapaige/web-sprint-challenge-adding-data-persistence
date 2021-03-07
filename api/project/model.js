// build your `Project` model here
//MVP: just need find() and insert() for MVP router
const db = require("../../data/dbConfig");

async function find() {
  return await db("projects");
}

async function insert(project) {
  const [project_id] = await db("projects").insert(project);
  return db("projects").where({ project_id }).first();
}

module.exports = {
  find,
  insert,
};
