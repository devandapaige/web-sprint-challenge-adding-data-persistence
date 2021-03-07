// build your `Resource` model here
//MVP: just need single find() for MVP router
const db = require("../../data/dbConfig");

async function find() {
  return await db("resources");
}

module.exports = {
  find,
};
