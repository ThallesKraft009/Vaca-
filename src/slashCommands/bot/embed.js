module.exports = async(req, res) => {

  const user = req.body.member.user.id
  const titulo = req.body.data.options[0].value;
  const descrição = req.body.data.options[1].value;
  const imagem = req.body.data.options[2].value;
  const canal = req.body.channel_id
  const url = `/channels/${canal}/messages`

  let embed = {
    title: `${titulo}`,
    description: `${descrição}`,
    image: { url: `${imagem}` }
  }
  
res.send({
   type: 4,
   data: {
      embeds: [embed]
    }
})  
  
}