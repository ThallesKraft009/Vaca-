const { QuickDB } = require('quick.db');
const db = new QuickDB();

module.exports = async(req, res) => {

const uid = req.body.data.options[0].value;
const author = req.body.member.user.id;


  await db.set(`uid_${author}`, uid)

  return res.send({
        type: 4,
        data: {
          content: `Seu uid foi salvo!\n> **\`${uid}\`**`,
          flags: 64,
        },
      });

}