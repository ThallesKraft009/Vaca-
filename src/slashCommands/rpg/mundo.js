const { QuickDB } = require('quick.db');
const db = new QuickDB();

module.exports = async(req, res) => {

const author = req.body.member.user.id;


  let uid = await db.get(`uid_${author}`);
    if (uid === null) return res.send({
        type: 4,
        data: {
          content: `Você não salvou seu uid, salve utilizando **\`/uid-save\`**.`,
          flags: 64,
        },
      });

  let mundo = await db.get(`mundo_${author}`);

     if (mundo === true) return res.send({
        type: 4,
        data: {
          content: `Você já entrou no mundo rpg!`,
          flags: 64,
        },
      });

  await db.set(`mundo_${author}`, true)
  

  return res.send({
        type: 4,
        data: {
          content: `<@${author}> bem vindo ao mundo, clique no botão pra ir em uma mensagem onde irá ter um tutorial!`,
         components: [
           {
             type: 1,
             components: [
               {
                 type: 2,
                 label: "Tutorial do Rpg",
                 style: 5,
                 url: `https://discord.com/channels/989995492953964574/1055216474349916271/1059538493044437012`
               }
             ]
           }
         ]
        },
      });
}