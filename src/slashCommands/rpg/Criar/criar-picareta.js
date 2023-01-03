const { QuickDB } = require('quick.db');
const db = new QuickDB();

module.exports = async(req, res) => {
  const author = req.body.member.user.id;
  const picareta = req.body.data.options[0].value;
  let gravetos = await db.get(`gravetos_${author}`)
    if (gravetos === null) gravetos = 0;

  //picareta = [rocha, cobre, ferro, titanio]

  let mundo = await db.get(`mundo_${author}`);
    if (mundo === null || mundo === false) return res.send({
        type: 4,
        data: {
          content: `Você precisa entrar no mundo, utilize **\`/entrar-no-mundo\`**!`,
          flags: 64,
        },
      });

  if (gravetos < 2) return res.send({
    type: 4,
    data: {
      content: `Você precisa ter 2 gravetos pra criar qualquer picareta.`,
      flags: 64
    }
  })

  console.log(picareta, gravetos)
  
//======================= | Pedra | ===============
  if (picareta === "pedra"){
    let rochas = await db.get(`rochas_${author}`);
      if (rochas === null) rochas = 0;

console.log(rochas, gravetos)

    if (rochas < 3) return res.send({
      type: 4,
      data: {
        content: `Você precisa de 3 rochas pra criar uma picareta`,
        flags: 64
      }
    })


      await db.add(`picareta_rocha_${author}`, 300);
      await db.sub(`rochas_${author}`, 3)
      await db.sub(`gravetos_${author}`, 2)

    return res.send({
      type: 4,
      data: {
        content: `Você criou uma **__Picareta de Pedra__**!`
      }
    })
  }


  if (picareta === "cobre"){}
  if (picareta === "ferro"){}
  if (picareta === "titanio"){}
};