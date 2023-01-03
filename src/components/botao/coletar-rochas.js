const { QuickDB } = require('quick.db');
const db = new QuickDB();

module.exports = async(req, res) => {

  const author = req.body.member.user.id;

  let rochas = await db.get(`rochas_${author}`);
  if (rochas === null) madeiras = 0;

await db.add(`rochas_${author}`, 1)
  
return res.send({
        type: 7,
        data: {
          content: `Você coletou 1 rocha e agora tem ${rochas + 1} rochas!`,
        },
      });
  
}