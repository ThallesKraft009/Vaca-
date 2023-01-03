const { QuickDB } = require('quick.db');
const db = new QuickDB();
const { DiscordRequest } = require("../slashCommands/utils.js");

async function sistema(){

  let hora = await await db.get("hora");
     if (hora === null) hora = 0;
  
     if (hora === 24 || hora > 24) {

  
       await db.add("dia", 1)
      await db.delete('hora');
       dia = await db.get("dia");
        
       diaMsg()
     } else {
       await db.add("hora", 1)

       diaMsg()
     }
}

async function diaMsg(){

let messageId = `1059575365984596100`;
let channelId = `989995492953964577`;

  let dia = await db.get("dia");
  let hora = await db.get("hora");
     if (dia === null) dia = 0;
     if (hora === null) hora = 1;
  
const endpoint = `/channels/${channelId}/messages/${messageId}`;

  let msg = {
    content: `Dia: ${dia}`,
    embeds: [
      {
        description: `Dia: ${dia} | Horário: ${hora}:00`
      }
    ]
  }

  try {
    await DiscordRequest(endpoint, { method: 'PATCH', body: msg });
  } catch (err) {
    console.error(err);
  }

}

module.exports = sistema;