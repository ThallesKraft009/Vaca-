
const { capitalize, DiscordRequest } = require('./utils.js');
const c = require("colors")

 async function HasGuildCommands(appId, guildId, commands) {
  if (guildId === '' || appId === '') return;

  commands.forEach((c) => HasGuildCommand(appId, guildId, c));
}

async function HasGuildCommand(appId, guildId, command) {
  
  const endpoint = `applications/${appId}/guilds/${guildId}/commands`;

  try {
    const res = await DiscordRequest(endpoint, { method: 'GET' });
    const data = await res.json();

    if (data) {
      const installedNames = data.map((c) => c['name']);
      
      if (!installedNames.includes(command['name'])) {
        console.log(c.red(`Instalando o comando "${command['name']}"...`));
        InstallGuildCommand(appId, guildId, command);
      } else {
        console.log(c.green(`O comando /${command['name']} foi instalado.`));

      }
    }
  } catch (err) {
    console.error(err);
  }
}


 async function InstallGuildCommand(appId, guildId, command) {
  
  const endpoint = `applications/${appId}/guilds/${guildId}/commands`;

  try {
    await DiscordRequest(endpoint, { method: 'POST', body: command });
  } catch (err) {
    console.error(err);
  }

  
}


async function editCommand(id, [command]){

if (id === null) return;
  if (command === null) return;

  let endpoint = `applications/${appId}/guilds/${guildId}/commands/${id}`;

  try {
    await DiscordRequest(endpoint, { method: 'PATCH', body: command });
  } catch (err) {
    console.error(err);
  }

}


module.exports = {InstallGuildCommand, HasGuildCommands}