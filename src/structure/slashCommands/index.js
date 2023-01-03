
module.exports = async(events, PUBLIC_KEY, APP_ID, GUILD_ID, token, commands) => {


 require('dotenv/config');
const express = require('express');
  const app = express();
const {
  InteractionType,
  InteractionResponseType,
  InteractionResponseFlags,
  MessageComponentTypes,
  ButtonStyleTypes,
} = require('discord-interactions');
const { VerifyDiscordRequest, DiscordRequest } = require('./utils.js');
const {
  HasGuildCommands
} = require('./commands.js');

const fs = require("fs");
const PORT = process.env.PORT || 3000;
app.use(express.json({ verify: VerifyDiscordRequest(PUBLIC_KEY) }));

  

app.get("/", (request, response) => { 
  const ping = new Date(); 
  ping.setHours(ping.getHours() - 3); 
console.log(c.yellow(`${ping.getUTCHours()}:${ping.getUTCMinutes()}:${ping.getUTCSeconds()} => Website ping recebido.`)); 
  response.sendStatus(200); 

});

  app.get("/api/comandos", async function(req, res){

const endpoint = `applications/${process.env.id}/guilds/${process.env.guild}/commands`;

  try {

    const data = await DiscordRequest(endpoint, { method: 'GET' });

const list = await data.json();
    res.json(list)
    
  } catch (err) {
    console.error(err);
  }

})
  
  app.post('/interactions', async function (req, res) {

const { type, id, data } = req.body;
    
    if (type === InteractionType.PING) {

      console.log(InteractionResponseType.PONG)

    return res.send({ type: InteractionResponseType.PONG });
    } 
    
  

require(`${events}`)(req, res)

  })
const c = require("colors");


  app.listen(PORT, () => {
  console.log(c.blue('Connectado ao Discord na porta:', PORT));
  HasGuildCommands(APP_ID, GUILD_ID, commands);
});

  }
 
  