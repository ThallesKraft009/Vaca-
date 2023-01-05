
//comandos :D

const ping = { 
    name: 'ping',
    description: "pong",
    type: 1,
}

const say = {
  name: 'say',
  description: "Faça-me falar!",
  type: 1,
  options: [
     {
     name: "mensagem",
     description: "mensagem",
      type: 3,
      required: true
     }
  ],
}

const embed = {
  name: 'embed',
  description: "Construa uma embed!",
  type: 1,
  options: [
     {
     name: "titulo",
     description: "titulo",
      type: 3,
      required: true
     },
    {
      name: "descrição",
     description: "descrição",
      type: 3,
      required: true
    },
    {
    name: "imagem",
     description: "imagem",
      type: 3,
      required: true
    }
  ],
}


  
const comandos = [ping, say];

module.exports = comandos;





async function editarCmd(id, command){

let { DiscordRequest } = require("../structure/slashCommands/utils.js");

  let endpoint = `applications/${process.env.id}/guilds/${process.env.guild}/commands/${id}`;

  try {
    await DiscordRequest(endpoint, { method: 'PATCH', body: command });

console.log("Comando editado.")

  } catch (err) {
    console.error(err);
  }
 
}

async function deletarCmd(id){
  let { DiscordRequest } = require("../structure/slashCommands/utils.js");

  let endpoint = `applications/${process.env.id}/guilds/${process.env.guild}/commands/${id}`;

  try {
    await DiscordRequest(endpoint, { method: 'DELETE' });

console.log("Comando deletado.")

  } catch (err) {
    console.error(err);
  }
}