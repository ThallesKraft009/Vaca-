module.exports = async(req, res) => {

  const user = req.body.member.user.id
  const mensagem = req.body.data.options[0].value;
  const canal = req.body.channel_id
  const url = `/channels/${canal}/messages`

  
  
}