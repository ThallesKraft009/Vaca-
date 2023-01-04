const { QuickDB } = require('quick.db');
const db = new QuickDB();

module.exports = async(req, res) => {
  const author = req.body.member.user.id;
  let fornalha = req.body.data.options[0].value;

  let mundo = await db.get(`mundo_${author}`);
    if (mundo === null || mundo === false) return res.send({
        type: 4,
        data: {
          content: `Você precisa entrar no mundo, utilize **\`/entrar-no-mundo\`**!`,
          flags: 64,
        },
      });


if (fornalha === "pedra"){
  let rochas = await db.get(`rochas_${author}`);
      if (rochas === null) rochas = 0;

  if (rochas < 9) return res.send({
    type: 4,
    data: {
      content: `Você precisa ter 9 rochas, mas você só tem ${rochas}!`,
      flags: 64
    }
  })

await db.get(`fornalha_pedra_${author}`, true);
await db.sub(`rochas_${author}`, 9);

  return res.send({
    type: 4,
    data: {
      content: `Você criou uma fornalha de **Pedra**!`
    }
  })

}
if (fornalha === "cobre"){}
if (fornalha === "ferro"){}
if (fornalha === "titanio"){}


}