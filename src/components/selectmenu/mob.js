const { QuickDB } = require('quick.db');
const db = new QuickDB();

module.exports = async(req, res) => {

const author = req.body.member.user.id;

  let chance = ["Matou", "Não matou", "Matou"];
    chance = chance[Math.floor(Math.random() * chance.length)];

  if (chance === "Matou"){

   let vida = await db.get(`vida_${author}`);
     await db.sub(`vida_${author}`, 1)

      res.send({
        type: 7,
        data: {
          content: `<@${author}> | Você matou o monstro, mas perdeu 1 de vida!`,
          components: [
        {
          type: 1,
          components: [
            {
              type: 2,
              label: "Continuar mineração",
              custom_id: `minerar_${author}`,
              style: 3
            }
          ]
        }
      ]
        }
      })
};
  if (chance === "Não matou"){
    let vida = await db.get(`vida_${author}`);
        await db.sub(`vida_${author}`, 3);

    res.send({
      type: 7,
      data: {
        content: `<@${author}> | Você não matou o mostro e fugiu, mas perdeu 3 de vida!`,
        components: [
        {
          type: 1,
          components: [
            {
              type: 2,
              label: "Continuar mineração",
              custom_id: `minerar_${author}`,
              style: 3
            }
          ]
        }
      ]
      }
    })
  };

}