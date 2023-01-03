const login = require("./bot/login.js");

const slashCommands = require("./slashCommands/index.js");

const mongodb = require("./mongodb/connect.js");

module.exports = {
  login,
  slashCommands,
  mongodb
}