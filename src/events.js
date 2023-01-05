const { InteractionType, InteractionResponseType, InteractionResponseFlags} = require('discord-interactions');

const { DiscordRequest } = require("./structure/slashCommands/utils.js");


module.exports = (req, res) => {
    const { type, id, data } = req.body;

if (type === InteractionType.APPLICATION_COMMAND) {

 const nome = data.name;

  if (nome === "ping") require("./slashCommands/bot/ping.js")(req, res);

  if (nome === "say") require("./slashCommands/bot/say.js")(req, res, DiscordRequest);

  if (nome === "embed") require("./slashCommands/bot/embed.js")(req, res);


  }
}