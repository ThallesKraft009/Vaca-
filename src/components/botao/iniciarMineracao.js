const { QuickDB } = require('quick.db');
const db = new QuickDB();

module.exports = async(req, res) => {

const author = req.body.member.user.id;

  let chances = ["CARVÃO", "PEDRA", "CARVÃO", "PEDRA", "COBRE", "CARVÃO", "PEDRA", "COBRE", "FERRO"];

  let minerio = chances[Math.floor(Math.random() * chances.length)];

let vida = await db.get(`vida_${author}`);
    if (vida === null) vida = await db.add(`vida_${author}`, 100)
  
    if (vida < 10) return res.send({
      type: 7,
      data: {
        content: `<@${author}> você está com vida baixa, você não pode minerar.`,
        embeds: [],
        components: []
      }
    })

let fome = await db.get(`fome_${author}`);
  if (fome === null) fome = await db.add(`fome_${author}`, 100)

  if (fome < 10) return res.send({
      type: 7,
      data: {
        content: `<@${author}> você está com muita fome, você não pode minerar.`,
        embeds: [],
        components: []
      }
    })

  
  if (minerio === "PEDRA"){

  return res.send({
    type: 7,
    data: {
      content: `<@!${author}> | Você não consegiu achar algum minério, continue minerando!`,
      embeds: []
    }
  })

};



  if (minerio === "CARVÃO"){
    return res.send({
      type: 7,
      data: {
        content: `<@!${author}> | Você achou carvão, qual picareta irá utilizar?`,
        embeds: [],
        components: [
          {
            type: 1,
            components: [
              {
                type: 3,
                custom_id: `carvao_${author}`,
                placeholder: "Abrir Inventário",
                options: [
                  {
                    label: "Picareta de Pedra",
                    description: "Clique pra selecionar",
                    value: "pedra"
                  },{
                    label: "Picareta de Cobre",
                    description: "Clique pra selecionar",
                    value: "cobre"
                  },{
                    label: "Picareta de Ferro",
                    description: "Clique pra selecionar",
                    value: "ferro"
                  },{
                    label: "Picareta de Titanio",
                    description: "Clique pra selecionar",
                    value: "titanio"
                  }
                ]
              }
            ]
          }
        ]
      }
    })
  };
  if (minerio === "COBRE"){};
  if (minerio === "FERRO"){};




}