// build your `Project` model here
//MVP: just need find() and insert() for MVP router
const db = require("../../data/dbConfig");

async function find() {
  return await db("projects");
}

async function insert(project) {
  return await db("projects").insert(project);
}

module.exports = {
  find,
  insert,
};
