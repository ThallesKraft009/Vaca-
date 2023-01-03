module.exports = async(req, res) => {

const user = req.body.data.options[0].value;
const author = req.body.member.user.id;


const fetch = require("node-fetch")

  await fetch(`https://discord.com/api/v9/users/${user}`, {
    headers: {
      Authorization: `Bot ${process.env.token}`
    }
  }).then(response => response.json()).then(info => {
  
  

return res.send({
        type: 4,
        data: {
          content: `<@${author}>`,
          embeds: [
            {
              title: `Avatar de ${info.username}`,
              image: 
                {
                  url: `https://cdn.discordapp.com/avatars/${info.id}/${info.avatar}.png?size=2048`
                },
              color: 65535
            }
          ],
           components: [
                 {
                   type: 1,
                   components: [
                    {
                    type: 2,
                    label: "Baixe o Avatar",
                    style: 5,
                    url: `https://cdn.discordapp.com/avatars/${info.id}/${info.avatar}.png?size=2048`
                }
            ]
        }
    ],
        },
      });
             
  })

  }