// build your `Resource` model here
//MVP: just need single find() and insert() for MVP router
const db = require("../../data/dbConfig");

async function find() {
  return await db("resources");
}

async function insert(resource) {
  return await db("resources").insert(resource);
}

module.exports = {
  find,
  insert,
};
