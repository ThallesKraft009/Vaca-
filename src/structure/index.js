const login = require("./bot/login.js");

const { edit_json } = require("./functions/database_json");

const slashCommands = require("./slashCommands/index.js");

const mongodb = require("./mongodb/connect.js");

module.exports = {
  login,
  slashCommands,
  mongodb,
  edit_json
}