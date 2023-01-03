const { QuickDB } = require('quick.db');
const db = new QuickDB();

module.exports = async(req, res) => {

  const author = req.body.member.user.id;

  let madeiras = await db.get(`madeiras_${author}`);
  if (madeiras === null) madeiras = 0;

await db.add(`madeiras_${author}`, 1)
  
return res.send({
        type: 7,
        data: {
          content: `Você coletou 1 madeira e agora tem ${madeiras + 1} madeiras!`,
        },
      });
  
}