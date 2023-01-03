const { QuickDB } = require('quick.db');
const db = new QuickDB();

module.exports = async(req, res) => {
  const author = req.body.member.user.id;

  let mundo = await db.get(`mundo_${author}`);
    if (mundo === null || mundo === false) return res.send({
        type: 4,
        data: {
          content: `Você precisa entrar no mundo, utilize **\`/entrar-no-mundo\`**!`,
          flags: 64,
        },
      });


  let madeiras = await db.get(`madeiras_${author}`)
  let gravetos = req.body.data.options[0].value;
  if (madeiras === null) madeiras = 0;
  if (gravetos === null) gravetos = 0;
  

if (gravetos > madeiras) return res.send({
        type: 4,
        data: {
          content: `Você precisa ter ${gravetos} blocos de madeira pra criar ${gravetos} gravetos!`,
          flags: 64,
        },
      });


  await db.add(`gravetos_${author}`, gravetos)
  await db.sub(`madeiras_${author}`, gravetos)

return res.send({
        type: 4,
        data: {
          content: `Você criou ${gravetos} gravetos!`
        },
      });
  
}