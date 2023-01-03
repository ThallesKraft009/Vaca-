require("dotenv").config()

const c = require("colors");
const express = require("express");
const tempo = require("ms");
const app = express();

app.get("/", (request, response) => { 
  const ping = new Date(); 
  ping.setHours(ping.getHours() - 3); 
console.log(c.yellow(`${ping.getUTCHours()}:${ping.getUTCMinutes()}:${ping.getUTCSeconds()} => Website ping recebido.`)); 
  response.sendStatus(200); 

});

const { slashCommands, login, mongodb } = require("./structure/index.js");

const commands = require("./slashCommands/list.js");

login(process.env.token, [
  {
    name: "a Vea Voadora nos Códigos | Cluster 1 [0]",
    type: 0
  }
])


slashCommands("../../events.js", process.env.key, process.env.id, process.env.guild, process.env.token, commands)


//mongodb(process.env.mongococns