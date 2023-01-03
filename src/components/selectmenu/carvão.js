const { QuickDB } = require('quick.db');
const db = new QuickDB();

module.exports = async(req, res) => {

const picareta = req.body.data.values[0];
const author = req.body.member.user.id

//picareta = [ pedra, cobre, ferro, titanio, pular];


let carvao = Math.floor(Math.random() * 1) + 20;
  
if (picareta === "pedra"){

picareta = await db.get(`picareta_rocha_${author}`);
    if (picareta === null) picareta = 0;

  if (picareta === 0 || picareta < 0) return res.send({
    type: 7,
    data: {
      content: `Você não tem uma picareta de **Pedra**!`
    }
  })

  await db.add(`carvão_${author}`, carvao);
  await db.sub(`picareta_rocha_${author}`, 2)

  return res.send({
    type: 7,
    data: {
      content: `<@${author}> | Você minerou ${carvao} carvões!`
    }
  })

}
if (picareta === "cobre"){}
if (picareta === "ferro"){}
if (picareta === "titanio"){}
if (picareta === "pular"){}

};