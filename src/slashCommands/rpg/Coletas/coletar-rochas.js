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


  return res.send({
        type: 4,
        data: {
          content: `Colete rochas que estão espalhados pelo mundo clicando no botão!`,
          components: [
            {
              type: 1,
              components: [
                {
                  type: 2,
                  label: "Colete Rochas",
                  custom_id: `rocha_${author}`,
                  style: 3
                }
              ]
            }
          ]
        },
      });
};