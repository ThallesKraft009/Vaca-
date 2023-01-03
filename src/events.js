const { InteractionType, InteractionResponseType, InteractionResponseFlags} = require('discord-interactions');

const { DiscordRequest } = require("./structure/slashCommands/utils.js");


module.exports = (req, res) => {
    const { type, id, data } = req.body;

if (type === InteractionType.APPLICATION_COMMAND) {

 const nome = data.name;

  if (nome === "bot-ping") require("./slashCommands/bot/ping.js")(req, res);

  if (nome === "falar") require("./slashCommands/bot/falar.js")(req, res, DiscordRequest);

  
 if (nome === "avatar-ver") require("./slashCommands/utils/avatar.js")(req, res);

  if (nome === "buscar-uid") require("./slashCommands/mw/buscar-uid.js")(req, res);

  if (nome === "uid-save") require("./slashCommands/mw/salvar-uid")(req, res);

  if (nome === "entrar-no-mundo") require("./slashCommands/rpg/mundo.js")(req, res);

  if (nome === "coletar-madeira") require("./slashCommands/rpg/Coletas/coletar-madeira.js")(req, res);

  if (nome === "coletar-rochas") require("./slashCommands/rpg/Coletas/coletar-rochas.js")(req, res);

  if (nome === "criar-gravetos") require("./slashCommands/rpg/Criar/criar-gravetos.js")(req, res);

  if (nome === "criar-picareta") require("./slashCommands/rpg/Criar/criar-picareta.js")(req, res);

  if (nome === "explorar-caverna") require("./slashCommands/rpg/Explorar/minerar.js")(req, res);

}

  if (type === InteractionType.MESSAGE_COMPONENT) {

    const botao = data.custom_id;

    if (botao === `madeira_${req.body.member.user.id}`)  require("./components/botao/coletar-madeira.js")(req, res);

    if (botao === `rocha_${req.body.member.user.id}`) require("./components/botao/coletar-rochas.js")(req, res);

    if (botao === `minerar_${req.body.member.user.id}`) require("./components/botao/iniciarMineracao.js")(req, res);

  }
};