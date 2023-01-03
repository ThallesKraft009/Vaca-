const fetch = require("node-fetch")
const { QuickDB } = require('quick.db');
const db = new QuickDB();

module.exports = async(req, res) => {

const option = req.body.data.options[0].value;
const author = req.body.member.user.id;

await fetch(`https://discord.com/api/v10/users/${option}`, {
    headers: {
      Authorization: `Bot ${process.env.token}`
    }
  }).then(response => response.json()).then(async(membro) => {
  


  let uid = await db.get(`uid_${membro.id}`);

  if (uid === null) return res.send({
        type: 4,
        data: {
          content: `<@!${membro.id}> não salvou seu uid em meu banco de dados.`,
          flags: 64,
        },
      });
    
return res.send({
        type: 4,
        data: {
          content: `O uid de <@!${membro.id}> é ${uid}`,
          flags: 64,
        },
      });

     })
  }